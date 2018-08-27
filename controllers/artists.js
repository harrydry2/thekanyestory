const artists = [
  {
    artist: "Kanye West",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/KanyeWest.png",
    spotify: "5K4W6rqBFWDnAN6FQUkS6x"
  },
  {
    artist: "Prince",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Prince.png",
    spotify: "5a2EaR3hamoenG9rDuVn8j"
  },
  {
    artist: "The Beatles",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/TheBeatles.png",
    spotify: "3WrFJ7ztbogyGnTHbHJFl2"
  },
  {
    artist: "David Bowie",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/DavidBowie.png",
    spotify: "0oSGxfWSnnOXhD2fKuz2Gy"
  },
  {
    artist: "Snoop Dogg",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/SnoopDogg.png",
    spotify: "7hJcb9fa4alzcOq3EaNPoG"
  },
  {
    artist: "Brockhampton",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Brockhampton.png",
    spotify: "1Bl6wpkWCQ4KVgnASpvzzA"
  },
  {
    artist: "Lil Wayne",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/LilWayne.png",
    spotify: "55Aa2cqylxrFIXC767Z865"
  },
  {
    artist: "A$AP Rocky",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/A$APRocky.png",
    spotify: "13ubrt8QOOCPljQ2FL1Kca"
  },
  {
    artist: "Marvin Gaye",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/MarvinGaye.png",
    spotify: "3koiLjNrgRTNbOwViDipeA"
  },
  {
    artist: "Daft Punk",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/DaftPunk.png",
    spotify: "4tZwfgrHOc3mvqYlEYSvVi"
  },
  {
    artist: "Bon Iver",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/BonIver.png",
    spotify: "4LEiUm1SRbFMgfqnQTwUbQ"
  },
  {
    artist: "Lil Uzi Vert",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/LilUziVert.png",
    spotify: "4O15NlyKLIASxsJ0PrXPfz"
  },
  {
    artist: "Ghostface Killah",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/GhostfaceKillah.png",
    spotify: "6FD0unjzGQhX3b6eMccMJe"
  },
  {
    artist: "Pusha T",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/PushaT.png",
    spotify: "0ONHkAv9pCAFxb0zJwDNTy"
  },
  {
    artist: "Pharrell Williams",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/PharrellWilliams.png",
    spotify: "2RdwBSPQiwcmiDo9kixcl8"
  },
  {
    artist: "Kendrick Lamar",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/KendrickLamar.png",
    spotify: "2YZyLoL8N0Wb9xBt1NhZWg"
  },
  {
    artist: "Chance the Rapper",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/ChancetheRapper.png",
    spotify: "1anyVhU62p31KFi8MEzkbf"
  },
  {
    artist: "Rihanna",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Rihanna.png",
    spotify: "5pKCCKE2ajJHZ9KAiaK11H"
  },
  {
    artist: "Drake",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Drake.png",
    spotify: "3TVXtAsR1Inumwj472S9r4"
  },
  {
    artist: "Frank Ocean",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/FrankOcean.png",
    spotify: "2h93pZq0e7k5yf4dywlkpM"
  },
  {
    artist: "Tyler, the Creator",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/TylertheCreator.png",
    spotify: "4V8LLVI7PbaPR0K2TGSxFF"
  },
  {
    artist: "2 Chainz",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/2Chainz.png",
    spotify: "17lzZA2AlOHwCwFALHttmp"
  },
  {
    artist: "André 3000",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/André3000.png",
    spotify: "74V3dE1a51skRkdII8y2C6"
  },
  {
    artist: "Beyoncé",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Beyoncé.png",
    spotify: "6vWDO969PvNqNYHIOW5v0m"
  },
  {
    artist: "Biggie Smalls",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/BiggieSmalls.png",
    spotify: "5me0Irg2ANcsgc93uaYrpb"
  },
  {
    artist: "Lil Yachty",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/LilYachty.png",
    spotify: "6icQOAFXDZKsumw3YXyusw"
  },
  {
    artist: "Cardi B",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/CardiB.png",
    spotify: "4kYSro6naA4h99UJvo89HB"
  },
  {
    artist: "J. Cole",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/JCole.png",
    spotify: "6l3HvQ5sa6mXTsMTB19rO5"
  },
  {
    artist: "Common",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Common.png",
    spotify: "2GHclqNVjqGuiE5mA7BEoc"
  },
  {
    artist: "Kid Cudi",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/KidCudi.png",
    spotify: "0fA0VVWsXO9YnASrzqfmYu"
  },
  {
    artist: "MF Doom",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/MFDoom.png",
    spotify: "2pAWfrd7WFF3XhVt9GooDL"
  },
  {
    artist: "Eminem",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Eminem.png",
    spotify: "7dGJo4pcD2V6oG8kP0tJRR"
  },
  {
    artist: "Future",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Future.png",
    spotify: "1RyvyyTE3xzB2ZywiAwp0i"
  },
  {
    artist: "Childish Gambino",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/ChildishGambino.png",
    spotify: "73sIBHcqh3Z3NyqHKZ7FOL"
  },
  {
    artist: "Gucci Mane",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/GucciMane.png",
    spotify: "13y7CgLHjMVRMDqxdx0Xdo"
  },
  {
    artist: "Jay Z",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/JayZ.png",
    spotify: "3nFkdlSjzX9mRTtwJOzDYB"
  },
  {
    artist: "Lauryn Hill",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/LaurynHill.png",
    spotify: "2Mu5NfyYm8n5iTomuKAEHl"
  },
  {
    artist: "Post Malone",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/PostMalone.png",
    spotify: "246dkjvS1zLTtiykXe5h60"
  },
  {
    artist: "Nicki Minaj",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/NickiMinaj.png",
    spotify: "0hCNtLu0JehylgoiP8L4Gh"
  },
  {
    artist: "Missy Elliott",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/MissyElliott.png",
    spotify: "2wIVse2owClT7go1WT98tk"
  },
  {
    artist: "Nas",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Nas.png",
    spotify: "20qISvAhX20dpIbOOzGK3q"
  },
  {
    artist: "Tupac",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Tupac.png",
    spotify: "1ZwdS5xdxEREPySFridCfh"
  },
  {
    artist: "Rapsody",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Rapsody.png",
    spotify: "6NL31G53xThQXkFs7lDpL5"
  },
  {
    artist: "21 Savage",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/21Savage.png",
    spotify: "1URnnhqYAYcrqrcwql10ft"
  },
  {
    artist: "Stormzy",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/Stormzy.png",
    spotify: "2SrSdSvpminqmStGELCSNd"
  },
  {
    artist: "Young Thug",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/YoungThug.png",
    spotify: "50co4Is1HCEo8bhOyUWKpn"
  },
  {
    artist: "Travis Scott",
    img:
      "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/TravisScott.png",
    spotify: "0Y5tJX1MQlPlqiwlOH1tJY"
  },
  {
    artist: "The Weeknd",
    img: "https://s3.eu-west-2.amazonaws.com/yeezydating/artists/TheWeeknd.png",
    spotify: "1Xyo4u8uXC1ZmMpatF05PJ"
  }
];

module.exports = {
  artists
};
