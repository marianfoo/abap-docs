  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Dynpros, HTML from the MIME Repository

This example demonstrates how a HTML file is displayed from the MIME repository.

Source Code

REPORT demo\_html\_from\_mime.
CLASS mime\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: mime\_line(1022) TYPE x,
           mime\_tab        TYPE STANDARD TABLE OF mime\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_mime\_obj
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(mime\_tab) TYPE mime\_tab.
ENDCLASS.
CLASS mime\_demo IMPLEMENTATION.
  METHOD main.
    DATA html\_url TYPE c LENGTH 255.
    DATA(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER' ).
    DATA(html\_control) = NEW
     cl\_gui\_html\_viewer( parent = custom\_container ).
    DATA(pict\_tab) = get\_mime\_obj(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    html\_control->load\_data(
      EXPORTING
        url          = 'picture\_url'
        type         = 'image'
        subtype      = '.gif'
      CHANGING
        data\_table   = pict\_tab ).
    DATA(html\_tab) = get\_mime\_obj(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/demo\_html.html' ).
    html\_control->load\_data(
      IMPORTING
        assigned\_url = html\_url
      CHANGING
        data\_table   = html\_tab ).
    html\_control->show\_url(
       EXPORTING
         url = html\_url ).
  ENDMETHOD.
  METHOD get\_mime\_obj.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(mime\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    mime\_tab =
      VALUE #( LET l1 = xstrlen( mime\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                mime\_wa+j(1022)
                           ELSE mime\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  mime\_demo=>main( ).
  CALL SCREEN 100.

Description

An API is used to load a HTML file and an image from the MIME repository and save them in internal tables. The method LOAD\_DATA of the class CL\_GUI\_HTML\_VIEWER is used to associate the data with the HTML control of CFW and the HTML file is displayed. The name of the image in the HTML file is the same as the URL passed to the method LOAD\_DATA for the image. LOAD\_DATA is given a URL for the image in the internal table and is used on the HTML page.

See also the [executable example](javascript:call_link\('abenicf_mime_pictures_abexa.htm'\)) for direct access to objects from the MIME repository using ICF.