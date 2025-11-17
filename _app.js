return (
      <AuthContext.Provider value={{ user }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    );
  }
