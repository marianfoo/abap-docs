  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_interactive.htm) →  [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptop-of-page.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Page Header, ABENLIST_TOP_OF_PAGE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Lists - Page Header

The example shows how to define the page header at the TOP-OF-PAGE event.

Source Code   

REPORT demo\_list\_top\_of\_page NO STANDARD PAGE HEADING
                             LINE-SIZE 80 LINE-COUNT 7.
DATA: h1(10) TYPE c VALUE '    Number',
      h2(10) TYPE c VALUE '    Square',
      h3(10) TYPE c VALUE '      Cube',
      n1 TYPE i, n2 TYPE i, n3 TYPE i,
      x TYPE i.
TOP-OF-PAGE.
  x = sy-colno + 8.  POSITION x. WRITE h1.
  x = sy-colno + 8.  POSITION x. WRITE h2.
  x = sy-colno + 8.  POSITION x. WRITE h3.
  x = sy-colno + 16. POSITION x. WRITE sy-pagno.
  ULINE.
START-OF-SELECTION.
  DO 10 TIMES.
    n1 = sy-index. n2 = sy-index \*\* 2. n3 = sy-index \*\* 3.
    NEW-LINE.
    WRITE: n1 UNDER h1,
           n2 UNDER h2,
           n3 UNDER h3.
  ENDDO.

Description   

This program creates a two-page list. In the self-defined page header, column headers are placed in relative position to each other using the system field sy-colno and the POSITION statement. The actual list output is positioned under the fields of the header line using the addition UNDER of the WRITE statement. The line breaks are achieved using NEW-LINE.

The alignment of the individual fields results from the ABAP default of representing character strings as left-aligned and numeric fields as right-aligned. The alignment can be adjusted using the formatting options LEFT-JUSTIFIED, RIGHT-JUSTIFIED, and CENTERED of the WRITE statement (see [WRITE - format\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to_options.htm)).