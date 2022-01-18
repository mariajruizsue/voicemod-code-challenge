import React, { useState, useEffect, useRef } from 'react'
import { useGlobalState } from 'state-pool'
import { ListOfVoices } from "../ListOfVoices/ListOfVoices"

import './VoiceSelector.css'


export function VoiceSelector ({ voices, voicesFav }) {
  const [searchVoice, setSearchVoice] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsFav, setSearchResultsFav] = useState([]);

  const [voiceSelected, setVoiceSelected] = useGlobalState("voiceSelected");
  const [currentOrder, setCurrentOrder] = useState("Acending");

  const [tags] = useGlobalState("tags");
  const [tagSelected, setTagSelected] = useState("All");

  const dropdownFilter = useRef(null);
  const dropdownShort = useRef(null);

  const [isActiveFilter, setIsActiveFilter] = useState(false, false);
  const [isActiveShort, setIsActiveShort] = useState(false, false);

  const [buttonTextFilter, setButtonTextFilter] = useState("All");
  const [buttonTextShort, setButtonTextShort] = useState("Ascending");

  const onClickFilterDropdown = () => setIsActiveFilter(!isActiveFilter);
  const onClickShortDropdown = () => setIsActiveShort(!isActiveShort);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownFilter.current !== null && !dropdownFilter.current.contains(e.target)) {
        setIsActiveFilter(!isActiveFilter);
      }
      if (dropdownShort.current !== null && !dropdownShort.current.contains(e.target)) {
        setIsActiveShort(!isActiveShort);
      }
    }

    if (isActiveFilter) {
      window.addEventListener('click', pageClickEvent);
    }

    if (isActiveShort) {
      window.addEventListener('click', pageClickEvent);
    }
    applyFilters();

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [searchVoice, voices, voicesFav, isActiveFilter, isActiveShort, dropdownFilter, dropdownShort, tagSelected, currentOrder]);

  const arrayOrder = (array, orderFactor) => {
    return array.sort(function(a, b){
      if (a.name > b.name){
        return orderFactor;
      }
      if (a.name < b.name){
        return (orderFactor * -1);
      }
      return 0;
    });
  }

  const applyOrder = (array) => {
    let orderFactor = 1;
    if(currentOrder === "Descending") orderFactor *= -1;
     return arrayOrder(array,orderFactor);
  }

  const applyFilters = () => {
    let results = voices.filter(voice =>
      voice.name.toLowerCase().includes(searchVoice.toLowerCase())
    );
    if (tagSelected !== 'All') {
      results = results.filter(voice => 
          voice.tags.includes(tagSelected.toLowerCase())
      );
    }
    let resultsFav = voicesFav.filter(voice =>
      voice.name.toLowerCase().includes(searchVoice.toLowerCase())
    );
    if (tagSelected !== 'All') {
      resultsFav = resultsFav.filter(voice => 
          voice.tags.includes(tagSelected.toLowerCase())
      );
    }
    setSearchResultsFav(applyOrder(resultsFav));
    setSearchResults(applyOrder(results));
  }

  const handleChange = e => {
    setSearchVoice(e.target.value);
  };

  function onClickFilter(tag) {
    setButtonTextFilter(tag);
    setTagSelected(tag);
  }

  function onClickOrder (order) {
    setButtonTextShort(order);
    setCurrentOrder(order);
  }

  const handlerClickRandom = () => {
    const totalVoices = searchResults.concat(searchResultsFav);
    const voiceRandom = totalVoices[Math.floor(Math.random()*totalVoices.length)];
    setVoiceSelected(voiceRandom);
  }

  return (
    <>
    <div className='header'>
      <div className='search-voice'>
        <input
        className="search-input"
        onChange={handleChange}
        value={searchVoice}
        type="search"
        />
        <img className="input-icon" loading='lazy' alt="Search icon" src="../assets/search.svg"/>
      </div> 
      <div className='input-selectors'>
        <div className='dropdown filter'>
          <img className="dropdown-icon" loading='lazy' alt="Filter icon" src="../assets/filter.svg"/>
          <div className='dropdown-input'>
            <button onClick={onClickFilterDropdown}
              className="select"
              type="button"
              value={buttonTextFilter}>
              <span>{buttonTextFilter}</span>
              { isActiveFilter === true ? 
              <img className="arrow-down-icon" loading='lazy' alt="Arrow icon" src="../assets/select-arrow.svg"/> 
              : 
              <img className="arrow-up-icon" loading='lazy' alt="Arrow icon" src="../assets/select-arrow.svg"/> 
              }
            </button>
          </div>
          {isActiveFilter ? 
          <div ref={dropdownFilter} className="options">
            <ul>
            {
              tags.map((tag, key) =>
                <li key={key} onClick={() => onClickFilter(tag)}>{tag}</li>
              )
            }
            </ul>
          </div>
          :
          <></>
          }
        </div>
        <div className='dropdown short'>
          <img className="dropdown-icon" loading='lazy' alt="Filter icon" src="../assets/order.svg"/>
          <div className='dropdown-input'>
            <button onClick={onClickShortDropdown}
              className="select"
              type="button"
              value={buttonTextShort}>
              <span>{buttonTextShort}</span>
              { isActiveShort === true ? 
              <img className="arrow-down-icon" loading='lazy' alt="Arrow icon" src="../assets/select-arrow.svg"/> 
              : 
              <img className="arrow-up-icon" loading='lazy' alt="Arrow icon" src="../assets/select-arrow.svg"/> 
              }
            </button>
          </div>
          {isActiveShort ? 
          <div ref={dropdownShort} className="options">
            <ul>
              <li onClick={() => onClickOrder("Acending")}>Ascending</li>
              <li onClick={() => onClickOrder("Descending")}>Descending</li>
            </ul>
          </div>
          :
          <></>
          }
        </div>
        <div className='random-selection'>
          <button className='random-button' onClick={handlerClickRandom}>
            <img className="random-icon" loading='lazy' alt="Random icon" src="../assets/button-random.svg"/> 
          </button>
        </div>
      </div> 

    </div>
    <div className='voices-list'>
    { searchResultsFav.length > 0 ?
      <div className='voices-fav'>
        <h2>Favourite Voices</h2>
        <ListOfVoices key={voicesFav.id} voices={searchResultsFav}/>
      </div>
      :
      <></>
    }
    { searchResults.length > 0 ?
      <div className='voices-pro'>
        <h2>Pro Voices</h2>
        <ListOfVoices key={voices.id} voices={searchResults}/>
      </div>
      :
      <></>
    }
    </div>
    </>
  );
}