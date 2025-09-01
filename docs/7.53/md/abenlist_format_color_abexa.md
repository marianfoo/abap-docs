---
title: "Lists, Using Colors"
description: |
  This example demonstrates how colors can make lists easier to read. Source Code REPORT demo_list_format_color_2 NO STANDARD PAGE HEADING LINE-SIZE 70. NODES: spfli, sflight. DATA sum TYPE i. TOP-OF-PAGE. WRITE 'List of Flights' COLOR COL_HEADING. ULINE. GET spfli. FORMAT COLOR COL_HEADING. WRI
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_format_color_abexa.htm"
abapFile: "abenlist_format_color_abexa.htm"
keywords: ["do", "if", "class", "data", "abenlist", "format", "color", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) →  [WRITE - ext\_format\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_ext_options.htm) → 

Lists, Using Colors

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
  sum = sum + sflight-seatsocc.
GET spfli LATE.
  ULINE.
  WRITE: 'Total Bookings:  ' INTENSIFIED OFF,
         sum COLOR COL\_TOTAL.
  ULINE.
  SKIP.

Description

All headings are displayed with the background color COL\_HEADING. The key fields from the table SPFLI are defined using COL\_KEY. At the event GET sflight, the list body has a different line background color (COL\_NORMAL) than the background of the list (COL\_BACKGROUND). In addition, flights where the number of bookings falls below a certain minimum number, have a red background. The total number of bookings for each flight has a yellow background.

Note that after each event the system assumes the default setting (COLOR OFF, INTENSIFIED ON). For this reason, the row background of 'Total Bookings:' at the event GET LATE becomes COL\_BACKGROUND again in the program above. INTENSIFIED is set to OFF here to preserve the same foreground color as for the other values displayed.