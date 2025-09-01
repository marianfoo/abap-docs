---
title: "ICF - Accessing the MIME Repository from a HTTP Service"
description: |
  This example demonstrates how the MIME repository is accessed using an HTTP service in ICF(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_http_mime DEFINITION INHERITING FROM cl_demo_classru
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhttp_mime_pictures_abexa.htm"
abapFile: "abenhttp_mime_pictures_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenhttp", "mime", "pictures", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ICF%20-%20Accessing%20the%20MIME%20Repository%20from%20a%20HTTP%20Service%2C%20ABENHTTP_MIME_PICTURES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

ICF - Accessing the MIME Repository from a HTTP Service

This example demonstrates how the MIME repository is accessed using an HTTP service in [ICF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_http\_mime DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA icf\_node TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_http\_mime IMPLEMENTATION.
  METHOD main.
    IF icf\_node IS INITIAL.
      RETURN.
    ENDIF.
    FINAL(url) = icf\_node
                  && \`?sap-client=\`
                  && sy-mandt
                  && \`&sap-language=\`
                  && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ).
    FINAL(url\_icf) = url && \`&mime\_access=icf\`.
    FINAL(url\_api) = url && \`&mime\_access=api\`.
    out->write\_html(
     |<html>| &&
     |<body>| &&
     |Link to HTTP-Service getting picture from ICF:<br><br>| &&
     |<a href="{ url\_icf }" target="\_blank" rel="noopener noreferrer">{
                 url\_icf }</a><br><br>| &&
     |Link to HTTP-Service getting picture from API:<br><br>| &&
     |<a href="{ url\_api }" target="\_blank" rel="noopener noreferrer">{
                 url\_api }</a><br><br>| &&
     |</body>| &&
     |</html>| ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_mime\`.
    FINAL(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The HTTP service /sap/bc/abap/demo\_mime can be called with different content of the form field mime\_access of the URL:

-   If the form field has the value icf, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates an HTML file. This file points to an image in the MIME repository (as described in a different executable [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_mime_pictures_abexa.htm)).
-   If the form field has the value api, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates the HTML file and also the image that is referenced in the HTML file. The image is loaded and forwarded using MIME API.