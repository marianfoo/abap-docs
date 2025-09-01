  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Images%20in%20HTML%2C%20ABENMIME_PICTURES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Images in HTML

The example demonstrates how images are displayed in HTML controls.

Source Code   

REPORT demo\_picture\_in\_html.
CLASS picture\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main1, main2.
  PRIVATE SECTION.
    TYPES: html     TYPE c LENGTH 255,
           html\_tab TYPE STANDARD TABLE OF html WITH EMPTY KEY.
    TYPES: pict\_line(1022) TYPE x,
           pict\_tab        TYPE STANDARD TABLE OF pict\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_pict\_tab
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(pict\_tab) TYPE pict\_tab.
ENDCLASS.
CLASS picture\_demo IMPLEMENTATION.
  METHOD main1.
    DATA html\_url TYPE c LENGTH 255.
    DATA pict\_url TYPE c LENGTH 255.
    FINAL(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER1' ).
    FINAL(html\_control) = NEW
     cl\_gui\_html\_viewer( parent = custom\_container ).
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    html\_control->load\_data(
      EXPORTING
        url          = 'picture\_url'
        type         = 'image'
        subtype      = '.gif'
      IMPORTING
        assigned\_url = pict\_url
      CHANGING
        data\_table   = pict\_tab ).
    DATA(html\_tab) = VALUE html\_tab(
      ( '<html><body><basefont face="arial">' )
      ( 'Picture with CL\_GUI\_HTML\_VIEWER<br><br>' )
      ( '<img src="' && pict\_url && '">' )
      ( '</body></html>' ) ).
    html\_control->load\_data(
      IMPORTING
        assigned\_url = html\_url
      CHANGING
        data\_table   = html\_tab ).
    html\_control->show\_url(
       EXPORTING
         url = html\_url ).
  ENDMETHOD.
  METHOD main2.
    FINAL(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER2' ).
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    DATA(ext\_data) =
      VALUE cl\_abap\_browser=>load\_tab( ( name = 'PICT.GIF'
                                         type = 'image'
                                         dref = REF #( pict\_tab ) ) ).
    FINAL(html\_tab) = VALUE cl\_abap\_browser=>html\_table(
      ( '<html><body><basefont face="arial">' )
      ( 'Picture with CL\_ABAP\_BROWSER<br><br>' )
      ( '<img src="PICT.GIF">' )
      ( '</body></html>' ) ).
    cl\_abap\_browser=>show\_html( html = html\_tab
                                container = custom\_container
                                data\_table  = ext\_data ).
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = FINAL(pict\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    pict\_tab =
      VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                pict\_wa+j(1022)
                           ELSE pict\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  picture\_demo=>main1( ).
  picture\_demo=>main2( ).
  CALL SCREEN 100.

Description   

Images loaded here from the MIME repository using an API are displayed in two browser controls.

-   The method main1 uses the class CL\_GUI\_HTML\_VIEWER directly. Its method LOAD\_DATA is used to get a URL for the image in the internal table, which is then used on the HTML page.
-   The method main2 uses the class CL\_ABAP\_BROWSER as a wrapper for the direct use of CL\_GUI\_HTML\_VIEWER and calls of the method LOAD\_DATA. A reference, linked with the name used in the HTML page, is passed to the internal table.

See also the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_mime_pictures_abexa.htm) for direct access to objects from the MIME repository using ICF.