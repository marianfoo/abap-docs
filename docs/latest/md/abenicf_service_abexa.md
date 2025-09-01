  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ICF%20-%20Calling%20an%20HTTP%20Service%2C%20ABENICF_SERVICE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ICF - Calling an HTTP Service

This example demonstrates how an [ICF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenicf_glosry.htm "Glossary Entry") HTTP service is called directly using a Web browser.

Source Code   

\* Public class definition
CLASS cl\_demo\_http\_service DEFINITION
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
CLASS cl\_demo\_http\_service IMPLEMENTATION.
  METHOD main.
    IF icf\_node IS INITIAL.
      RETURN.
    ENDIF.
    DATA carrid TYPE spfli-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    FINAL(url) = icf\_node &&
                \`?sap-client=\` && sy-mandt &&
                \`&sap-language=\`
                  && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ) &&
                \`&carrid=\`     && carrid.
    out->write\_html(
      |<html>| &&
      |<body>| &&
      |Link to HTTP-Service:<br><br>| &&
      |<a href="{ url }" target="\_blank" rel="noopener noreferrer">{
                  url }</a>| &&
      |</body>| &&
      |</html>| ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\`.
    FINAL(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Any HTTP service defined in the service transaction SICF can be tested here. If the URL of the service is known, it can be called from the Internet, for example by entering an address in a browser. In this example, a service of this type is called using a generated webpage, which contains a link to the URL of the service. The URL is constructed from the host and port of the current AS instance, the path in the service tree, and a form field. The host and port are filled using the method CL\_HTTP\_SERVER=>GET\_LOCATION. The form field carrid is filled with the content of a field filled previously by user input. When this link is chosen, the browser displays the HTML page returned by the service. The content of the form field carrid can be modified in the input field of the browser, to display different data.

The called HTTP service is defined as the node /sap/bc/abap/demo in the transaction SICF. The assigned HTTP request handler is the class CL\_HTTP\_EXT\_SERVICE\_DEMO. If a form field ...&carrid=... is added to the URL of the service, the content of this field is used as a key for selecting associated data from the database table SPFLI. This is achieved by the class CL\_HTTP\_EXT\_SERVICE\_DEMO implementing the interface IF\_HTTP\_EXTENSION and its method HANDLE\_REQUEST. This method is called by ICF and a reference is passed to a server object that implements the interface IF\_HTTP\_SERVER. The attributes REQUEST and RESPONSE of this interface refer to objects, which are implemented by the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE. The REQUEST object is used to read the form field. The RESPONSE object returns the result.

METHOD if\_http\_extension~handle\_request.
  SELECT \*
         FROM spfli
         WHERE carrid = @( to\_upper(
           cl\_abap\_dyn\_prg=>escape\_quotes(
             val = escape( val = server->request->get\_form\_field(
                                                    name = \`carrid\` )
                           format = cl\_abap\_format=>e\_xss\_ml ) ) ) )
         INTO TABLE @DATA(connections) ##no\_text.
  "cl\_demo\_output=>get converts ABAP data to HTML and is secure
  server->response->set\_cdata(
    data = cl\_demo\_output=>get( connections ) ).
ENDMETHOD.

The built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm) and the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG are using to prevent [cross site scripting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxss_glosry.htm "Glossary Entry") and [SQL injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_injection_glosry.htm "Glossary Entry"). The content of the internal table connections (filled in accordance with the passed form field) is converted to HTML using the class CL\_DEMO\_OUTPUT before it is passed to the RESPONSE object.

Hint

The HTTP service must be activated in transaction SICF before the example can work.