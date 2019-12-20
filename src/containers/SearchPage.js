import React, { useState, useEffect, useCallback } from "react";

import AppBar from "../components/AppBar";
import Dialog from "../components/Dialog";
import List from "../components/List";

import EmptyState from "../components/TransitionState/Empty";
import ErrorState from "../components/TransitionState/Error";
import LoadingState from "../components/TransitionState/Loading";
import NotFoundState from "../components/TransitionState/NotFound";

import { useDispatch, useSelector } from "react-redux";
import { getPlayers, savePlayer, removePlayer } from "../store/actions/players";

const SearchPage = props => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players);
  const savedPlayers = players.saved;
  const isPlayersLoading = players.loading;
  const playersError = players.error;

  const [dialogId, setDialogId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    searchQuery.length > 1 && dispatch(getPlayers({ query: searchQuery }));
  }, [dispatch, searchQuery]);

  const onListItemActionClick = useCallback(
    id => {
      savedPlayers.includes(id)
        ? setDialogId(id)
        : dispatch(savePlayer({ id }));
    },
    [dispatch, savedPlayers]
  );

  return (
    <div>
      <AppBar
        searchQuery={searchQuery}
        onSearch={query => setSearchQuery(query)}
      />
      {playersError && <ErrorState error={playersError} />}
      {searchQuery.length <= 1 ? (
        <EmptyState />
      ) : isPlayersLoading ? (
        <LoadingState />
      ) : players.data.length ? (
        <List
          onItemActionClick={onListItemActionClick}
          items={players.data}
          checkedItems={savedPlayers}
        />
      ) : (
        <NotFoundState />
      )}
      <Dialog
        id={dialogId}
        handleClose={() => setDialogId(0)}
        handleConfirm={id => {
          setDialogId(0);
          dispatch(removePlayer({ id }));
        }}
      ></Dialog>
    </div>
  );
};

export default SearchPage;
