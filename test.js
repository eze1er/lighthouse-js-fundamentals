var umbrella = {
    color: "pink",
    isOpen: true,
    isClose: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!'";
            } else {
                umbrella.isOpen = true;
                return "julia opens the umbrella!";
            }
    }};
    umbrella = {
          color: "pink",
        isOpen: true,
        isClose: true,
        close: function() {
          if (umbrella.isClose === true) {
            return "the umbrella is already closed!";
         }
         else {
            umbrella.isClose = true;
            return "Julia closethe umbrella";
        }
    }
    };

