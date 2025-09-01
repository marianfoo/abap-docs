  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_abexas.htm) → 

ICF - Accessing the MIME Repository from a HTTP Service

This example demonstrates how the MIME repository is accessed using an HTTP service in [ICF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_http\_mime.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA icf\_node TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF icf\_node IS INITIAL.
      RETURN.
    ENDIF.
    DATA(url) = icf\_node
                  && \`?sap-client=\`
                  && sy-mandt
                  && \`&sap-language=\`
                  && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ).
    DATA(url\_icf) = url && \`&mime\_access=icf\`.
    DATA(url\_api) = url && \`&mime\_access=api\`.
    cl\_demo\_output=>display\_html(
     |<html>| &&
     |<body>| &&
     |Link to HTTP-Service getting picture from ICF:<br><br>| &&
     |<a href="{ url\_icf }" target="\_blank">{ url\_icf }</a><br><br>| &&
     |Link to HTTP-Service getting picture from API:<br><br>| &&
     |<a href="{ url\_api }" target="\_blank">{ url\_api }</a><br><br>| &&
     |</body>| &&
     |</html>| ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_mime\`.
    DATA(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The HTTP service /sap/bc/abap/demo\_mime can be called with different contents of the form field mime\_access of the URL:

-   If the form field has the value icf, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates an HTML file. This file points to an image in the MIME repository (as described in a different executable [example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_mime_pictures_abexa.htm)).

-   If the form field has the value api, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates the HTML file and also the image that is referenced in the HTML file. The image is loaded and forwarded using MIME API.