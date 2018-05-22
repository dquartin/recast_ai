
var algo = require('./algo');

// generateur d'arbre aleatoires, avec des valeurs entre 1 et 100
// max_depth determine la profondeur de l'arbre (nombre de branches)
// random_value renvoie une valeur aleatoirek stocke comme 'value' dans l'arbre

/*
const max_depth = 10;
const number = 100;

const random_value = () => {
	const value = Math.floor(Math.random() * number);
	return(value);
}

const createNode = (depth) => {
	const value = Math.random();

	if (value < 0.2 || depth > max_depth)
		return { value: random_value(), left: null, right: null };
	if (value < 0.3)
		return { value: random_value(), left: createNode(depth + 1), right: null };
	if (value < 0.6)
		return { value: random_value(), left: null, right: createNode(depth + 1) };
	else
		return { value: random_value(), left : createNode(depth + 1), right: createNode(depth + 1) };
}

var json = JSON.stringify(createNode(0), null, "  "); //permet de recuperer l'arbre
*/


const bigTree = {
  "value": 19,
  "left": {
    "value": 97,
    "left": {
      "value": 27,
      "left": {
        "value": 37,
        "left": {
          "value": 53,
          "left": {
            "value": 34,
            "left": null,
            "right": {
              "value": 26,
              "left": {
                "value": 2,
                "left": {
                  "value": 39,
                  "left": {
                    "value": 37,
                    "left": {
                      "value": 42,
                      "left": {
                        "value": 46,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 59,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 14,
                      "left": null,
                      "right": {
                        "value": 35,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": null
                },
                "right": {
                  "value": 55,
                  "left": {
                    "value": 53,
                    "left": null,
                    "right": {
                      "value": 76,
                      "left": null,
                      "right": {
                        "value": 73,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 84,
                    "left": null,
                    "right": {
                      "value": 89,
                      "left": null,
                      "right": null
                    }
                  }
                }
              },
              "right": {
                "value": 21,
                "left": null,
                "right": null
              }
            }
          },
          "right": null
        },
        "right": {
          "value": 8,
          "left": {
            "value": 23,
            "left": null,
            "right": {
              "value": 44,
              "left": {
                "value": 50,
                "left": null,
                "right": {
                  "value": 4,
                  "left": {
                    "value": 18,
                    "left": {
                      "value": 58,
                      "left": null,
                      "right": null
                    },
                    "right": {
                      "value": 5,
                      "left": {
                        "value": 59,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 22,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 90,
                    "left": null,
                    "right": {
                      "value": 4,
                      "left": null,
                      "right": {
                        "value": 15,
                        "left": null,
                        "right": null
                      }
                    }
                  }
                }
              },
              "right": {
                "value": 14,
                "left": null,
                "right": {
                  "value": 37,
                  "left": null,
                  "right": {
                    "value": 35,
                    "left": {
                      "value": 4,
                      "left": null,
                      "right": {
                        "value": 55,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": null
                  }
                }
              }
            }
          },
          "right": {
            "value": 77,
            "left": {
              "value": 80,
              "left": {
                "value": 88,
                "left": null,
                "right": null
              },
              "right": {
                "value": 96,
                "left": null,
                "right": null
              }
            },
            "right": {
              "value": 72,
              "left": {
                "value": 53,
                "left": {
                  "value": 17,
                  "left": {
                    "value": 57,
                    "left": {
                      "value": 46,
                      "left": {
                        "value": 9,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 11,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 23,
                      "left": {
                        "value": 45,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 12,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": null
                },
                "right": {
                  "value": 62,
                  "left": {
                    "value": 13,
                    "left": {
                      "value": 62,
                      "left": {
                        "value": 34,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 78,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 7,
                      "left": {
                        "value": 12,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 76,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 96,
                    "left": null,
                    "right": {
                      "value": 20,
                      "left": {
                        "value": 37,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 27,
                        "left": null,
                        "right": null
                      }
                    }
                  }
                }
              },
              "right": {
                "value": 51,
                "left": {
                  "value": 42,
                  "left": {
                    "value": 24,
                    "left": {
                      "value": 5,
                      "left": {
                        "value": 25,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 47,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": null
                  },
                  "right": {
                    "value": 43,
                    "left": {
                      "value": 90,
                      "left": null,
                      "right": null
                    },
                    "right": {
                      "value": 18,
                      "left": {
                        "value": 55,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 94,
                        "left": null,
                        "right": null
                      }
                    }
                  }
                },
                "right": {
                  "value": 36,
                  "left": {
                    "value": 38,
                    "left": null,
                    "right": {
                      "value": 70,
                      "left": {
                        "value": 99,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 5,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 95,
                    "left": {
                      "value": 8,
                      "left": null,
                      "right": {
                        "value": 51,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 50,
                      "left": {
                        "value": 13,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 36,
                        "left": null,
                        "right": null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "right": {
        "value": 33,
        "left": {
          "value": 43,
          "left": {
            "value": 17,
            "left": null,
            "right": null
          },
          "right": {
            "value": 57,
            "left": null,
            "right": null
          }
        },
        "right": {
          "value": 99,
          "left": null,
          "right": null
        }
      }
    },
    "right": {
      "value": 6,
      "left": {
        "value": 90,
        "left": null,
        "right": {
          "value": 12,
          "left": null,
          "right": {
            "value": 53,
            "left": null,
            "right": {
              "value": 37,
              "left": null,
              "right": {
                "value": 15,
                "left": {
                  "value": 29,
                  "left": null,
                  "right": null
                },
                "right": {
                  "value": 44,
                  "left": {
                    "value": 97,
                    "left": null,
                    "right": {
                      "value": 95,
                      "left": {
                        "value": 7,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 39,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 20,
                    "left": {
                      "value": 99,
                      "left": {
                        "value": 76,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 21,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": null
                  }
                }
              }
            }
          }
        }
      },
      "right": {
        "value": 32,
        "left": {
          "value": 88,
          "left": null,
          "right": {
            "value": 77,
            "left": null,
            "right": null
          }
        },
        "right": {
          "value": 80,
          "left": {
            "value": 44,
            "left": null,
            "right": {
              "value": 73,
              "left": null,
              "right": null
            }
          },
          "right": {
            "value": 47,
            "left": {
              "value": 3,
              "left": {
                "value": 99,
                "left": {
                  "value": 11,
                  "left": {
                    "value": 15,
                    "left": {
                      "value": 96,
                      "left": {
                        "value": 17,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 8,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 55,
                      "left": {
                        "value": 24,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 49,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": {
                    "value": 99,
                    "left": null,
                    "right": {
                      "value": 27,
                      "left": null,
                      "right": {
                        "value": 14,
                        "left": null,
                        "right": null
                      }
                    }
                  }
                },
                "right": null
              },
              "right": {
                "value": 61,
                "left": {
                  "value": 95,
                  "left": {
                    "value": 40,
                    "left": null,
                    "right": null
                  },
                  "right": {
                    "value": 75,
                    "left": null,
                    "right": null
                  }
                },
                "right": {
                  "value": 27,
                  "left": {
                    "value": 73,
                    "left": {
                      "value": 37,
                      "left": {
                        "value": 2,
                        "left": null,
                        "right": null
                      },
                      "right": {
                        "value": 60,
                        "left": null,
                        "right": null
                      }
                    },
                    "right": {
                      "value": 13,
                      "left": null,
                      "right": {
                        "value": 24,
                        "left": null,
                        "right": null
                      }
                    }
                  },
                  "right": null
                }
              }
            },
            "right": {
              "value": 87,
              "left": null,
              "right": {
                "value": 85,
                "left": null,
                "right": {
                  "value": 69,
                  "left": null,
                  "right": {
                    "value": 53,
                    "left": null,
                    "right": null
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "right": {
    "value": 1,
    "left": null,
    "right": {
      "value": 68,
      "left": {
        "value": 87,
        "left": null,
        "right": null
      },
      "right": {
        "value": 63,
        "left": null,
        "right": {
          "value": 62,
          "left": null,
          "right": {
            "value": 58,
            "left": null,
            "right": {
              "value": 33,
              "left": {
                "value": 67,
                "left": null,
                "right": null
              },
              "right": {
                "value": 19,
                "left": {
                  "value": 55,
                  "left": null,
                  "right": null
                },
                "right": null
              }
            }
          }
        }
      }
    }
  }
};

const nullTree = {
  "value": null,
  "left": null,
  "right": {
    "value": null,
    "left": null,
    "right": {
      "value": null,
      "left": null,
      "right": {
        "value": null,
        "left": null,
        "right": null
      }
    }
  }
};

const smallTree = {
  "value": 7,
  "left": null,
  "right": {
    "value": 95,
    "left": {
      "value": 52,
      "left": null,
      "right": {
        "value": 27,
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": 61,
      "left": {
        "value": 86,
        "left": null,
        "right": null
      },
      "right": {
        "value": 36,
        "left": null,
        "right": null
      }
    }
  }
}

const negTree =  {
 "value": -8,
  "left": null,
  "right": {
    "value": -27,
    "left": null,
    "right": {
      "value": -3,
      "left": null,
      "right": {
        "value": -15,
        "left": null,
        "right": null
      }
    }
  }
};

console.log('Max value: ' + algo(bigTree, bigTree.value));
console.log('Max value: ' + algo(nullTree, nullTree.value));
console.log('Max value: ' + algo(smallTree, smallTree.value));
console.log('Max value: ' + algo(negTree, negTree.value));