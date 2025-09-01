  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) →  [WRITE](javascript:call_link\('abapwrite-.htm'\)) →  [WRITE, ext\_format\_options](javascript:call_link\('abapwrite_ext_options.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Using Colors, ABENLIST_FORMAT_COLOR_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Lists - Using Colors

This example demonstrates how colors can make lists easier to read.

Source Code   

REPORT demo\_list\_format\_color\_2 NO STANDARD PAGE HEADING LINE-SIZE 70.
NODES: spfli, sflight.
DATA sum TYPE i.
TOP-OF-PAGE.
  WRITE 'List of Flights' COLOR COL\_HEADING.
  ULINE.
GET spfli.
  FORMAT COLOR COL\_HEADING.
  WRITE: 'CARRID', 10 'CONNID', 20 'FROM', 40 'TO'.
  FORMAT COLOR COL\_KEY.
  WRITE: / spfli-carrid   UNDER 'CARRID',
           spfli-connid   UNDER 'CONNID',
           spfli-cityfrom UNDER 'FROM',
           spfli-cityto   UNDER 'TO'.
  ULINE.
  FORMAT COLOR COL\_HEADING.
  WRITE: 'Date', 20 'Seats Occupied', 50 'Seats Available'.
  ULINE.
  sum = 0.
GET sflight.
  IF sflight-seatsocc LE 10.
    FORMAT COLOR COL\_NEGATIVE.
  ELSE.
    FORMAT COLOR COL\_NORMAL.
  ENDIF.
  WRITE: sflight-fldate   UNDER 'Date',
         sflight-seatsocc UNDER 'Seats Occupied',
         sflight-seatsmax UNDER 'Seats Available'.
  sum += sflight-seatsocc.
GET spfli LATE.
  ULINE.
  WRITE: 'Total Bookings:  ' INTENSIFIED OFF,
         sum COLOR COL\_TOTAL.
  ULINE.
  SKIP.

Description   

All headers are displayed with the background color COL\_HEADING. The key fields from the table SPFLI are defined using COL\_KEY. At the event GET sflight, the list body has a different line background color (COL\_NORMAL) than the background of the list (COL\_BACKGROUND). In addition, flights where the number of bookings falls below a certain minimum number, have a red background. The total number of bookings for each flight has a yellow background.

It should be noted that after each event the system assumes the default setting (COLOR OFF, INTENSIFIED ON). For this reason, the line background of 'Total Bookings:' at the event GET LATE becomes COL\_BACKGROUND again in the program above. INTENSIFIED is set to OFF here to preserve the same foreground color as for the other values displayed.