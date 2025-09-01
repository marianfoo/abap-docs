# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ICF - Internet Communication Framework

Included pages: 8


### abenicf.htm

---
title: "ICF - Internet Communication Framework"
description: |
  Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm"
abapFile: "abenicf.htm"
keywords: ["select", "update", "do", "if", "try", "method", "class", "data", "abenicf"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) → 

ICF - Internet Communication Framework

Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes place using ICF. ICF is a simplified technical foundation that can be used by more advanced programming interfaces. This means that ABAP programs do not usually access ICF directly and wrappers are used instead, such as [Business Server Pages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry"), [Web Dynpro ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"), Web Services ABAP, or on OData-based services like [SAPUI5](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensapui5_glosry.htm "Glossary Entry"). Wrappers like these ensure that the conventions required for external communication are met, such as the model view controller approach (MVC) in Web Dynpro and SAPUI5 or Simple Object Access Protocol (SOAP) in Web services.

To communicate with the Internet using REST principles (Representational State Transfer), the interfaces and classes in the ABAP REST Library in the package SREST should be used, since they adapt ICF accordingly.

-   [ICF Overview](#abenicf-1--------as-abap-as-an-icf-server---@ITOC@@ABENICF_2)

-   [AS ABAP as an ICF Client](#abenicf-3--------icf-security---@ITOC@@ABENICF_4)

-   [More Information](#@@ITOC@@ABENICF_5)

Note

Information about communications using the WebSocket protocol or TCP can be found under [ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm).

ICF Overview

The following figure is a (highly simplified) schematic overview of communications between ABAP and the Internet using ICF. It uses HTTP communication as an example.

![Figure](abdoc_icf.gif)

The actual communication of the [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") with the Internet takes places through its [Internet Communication Manager](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternet_con_man_glosry.htm "Glossary Entry") (ICM). The manager itself communicates with an [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") work process, whose task handler controls ICF.

Communication can run in either direction, meaning that AS ABAP can be a server or a client. Within ICF, this aspect is implemented using different branches with their own interfaces and classes. ABAP programs can both respond to requests from the Internet and provide a service with data for further handling and itself query data from Internet. This is done by implementing the appropriate interfaces.

Notes

-   Before each response is sent in an AS ABAP as ICF server or ICF client, a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is executed (except in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry")).

-   Requests sent from ICM to an AS ABAP open a separate [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_session_glosry.htm "Glossary Entry") session here, where AS ABAP can process the request as an ICF server.

-   HTTP/HTTPS communication is not bidirectional, which means that one partner is always the client and one partner is always the server. Bidirectional communication is possible using the WebSocket protocol or TCP with [ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm).

AS ABAP as an ICF Server

Each service that is reachable from the Internet and for which AS ABAP is used as an ICF server must be created as a node in the service tree in the service editor (transaction SICF). A service of this type is a transportable repository object that determines the properties of the service.

The initial node of the service tree stands for the AS ABAP Web address consisting of the host and the port. The position of the node in the tree determines the further URL path required to call a specific service. A URL can contain form fields after the actual address part, which are read by ICF.

Before a response can be made to a HTTP request sent to a service in the service tree in transaction SICF, at least one global class must be assigned to this service. This class must implement the interface IF\_HTTP\_EXTENSION and have access to the ICF infrastructure. When a request is sent to the service, ICF creates a HTTP request handler as an instance of this class. The implemented interface has only one method, HANDLE\_REQUEST, whose input parameter SERVER is a reference to the server object represented by IF\_HTTP\_SERVER. The attributes and methods of the server object make it possible to query properties of the request, such as the content of the form fields in the URL and to pass data to the server in a suitable format, such as HTML or XML. The most important are the attributes REQUEST and RESPONSE, which refer to objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE.

An HTTP/HTTPS request in an HTTP request handler is handled as [ICF processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_processing_glosry.htm "Glossary Entry") in a separate [ICF session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_session_glosry.htm "Glossary Entry"). Here, certain statements, like [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) or [BREAK-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapbreak-point.htm), are handled differently than, for example, in dialog processing. External breakpoints can be set to debug programs during ICF processing.

Notes

-   Special URL form fields, such as sap-user, sap-client, or sap-language, all start with the prefix sap- and are evaluated accordingly when logons are made to an ICF session.

-   A special handler class can be used to access objects from the MIME repository directly using ICF services (see the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_mime_pictures_abexa.htm)).

-   Alongside the nodes that represent HTTP services, the nodes for [ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) addressed using the WebSocket protocol or TCP are defined in the service tree in ICF.

Executable Examples

-   [Calling an HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm)

-   One production example of a self-programmed HTTP service is the Web version of this documentation itself

AS ABAP as an ICF Client

If the proxy setting for the HTTP client is configured appropriately in transaction SICF, ABAP programs can send requests to the Internet using ICF and receive responses. This is done using client objects from the class CL\_HTTP\_CLIENT, which implements the interface IF\_HTTP\_CLIENT. A client object can be created using a factory method from this class, which associates it with a Web address. Like a server object, the attributes REQUEST and RESPONSE reference objects that implement the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE and that can be used to send requests and receive responses.

Executable Example

ABAP as [HTTP Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_client_abexa.htm)

ICF Security

The API of ICF enables virus scans to be run using the virus scan interface (VSI). The required virus scan profile for the scan can be selected.

If HTML pages can be created on an ICF server, it may be possible to prevent [Cross Side Scripting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_scrty.htm). This is usually a task of frameworks based on ICF but it is also important not to forget this for directly created HTML pages.

Other security gaps also need to be blocked. For example, pages delivered from an ICF server should be protected against clickjacking attacks. A clickjacking attack integrates a page into the framework of an external Web page and tricks the reader into clicking on malicious links. This can be prevented in the HTTP request handler by using a method call

server->response->set\_header\_field( name = 'X-Frame-Options' value = '...' ).

, provided that the values "SAMEORIGIN" or "DENY" can be passed to value (server is a reference variable, which points to the server object).

More Information

-   Detailed information about ICF and ICM can be found in the Internet Communication Framework documentation in SAP Help Portal.

-   This documentation also describes communication between AS ABAP and the Internet, based on class wrappers or ICF enhancements such as ABAP Web Services or the ABAP REST Library.

Continue
[ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm)


### abenicf_abexas.htm

---
title: "ICF Examples"
description: |
  !Example(exa.gif 'Example') Calling an HTTP Service(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm) !Example(exa.gif 'Example') Calling an HTTP Service Using the POST Method(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_post_service_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm"
abapFile: "abenicf_abexas.htm"
keywords: ["do", "if", "method", "data", "abenicf", "abexas"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) → 

ICF Examples

Continue
![Example](exa.gif "Example") [Calling an HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm)
![Example](exa.gif "Example") [Calling an HTTP Service Using the POST Method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_post_service_abexa.htm)
![Example](exa.gif "Example") [ABAP as HTTP Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_client_abexa.htm)
![Example](exa.gif "Example") [Accessing the MIME Repository Using ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_mime_pictures_abexa.htm)
![Example](exa.gif "Example") [Accessing the MIME Repository from a HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhttp_mime_pictures_abexa.htm)


### abenicf_service_abexa.htm

---
title: "Calling an HTTP Service"
description: |
  This example demonstrates how an ICF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm 'Glossary Entry') HTTP service is called directly using a Web browser. Source Code REPORT demo_http_service. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. CLASS-METHODS
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm"
abapFile: "abenicf_service_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenicf", "service", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm) → 

Calling an HTTP Service

This example demonstrates how an [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry") HTTP service is called directly using a Web browser.

Source Code

REPORT demo\_http\_service.
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
    DATA carrid TYPE spfli-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    DATA(url) = icf\_node &&
                \`?sap-client=\` && sy-mandt &&
                \`&sap-language=\`
                  && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ) &&
                \`&carrid=\`     && carrid.
    cl\_demo\_output=>display\_html(
      |<html>| &&
      |<body>| &&
      |Link to HTTP-Service:<br><br>| &&
      |<a href="{ url }" target="\_blank">{ url }</a>| &&
      |</body>| &&
      |</html>| ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\`.
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

Any HTTP service defined in the service transaction SICF can be tested here. If the URL of the service is known, it can be called from the Internet, for example by entering an address in a browser. In this example, a service of this type is called using a generated webpage, which contains a link to the URL of the service. The URL is constructed from the host and port of the current AS Instance, the path in the service tree, and a form field. The host and port are filled using the method CL\_HTTP\_SERVER=>GET\_LOCATION. The form field carrid is filled with the content of a field filled previously by user input. When this link is chosen, the browser displays the HTML page returned by the service. The content of the form field carrid can be modified in the input field of the browser, to display different data.

The called HTTP service is defined as the node /sap/bc/abap/demo in the transaction SICF. The assigned HTTP request handler is the class CL\_HTTP\_EXT\_SERVICE\_DEMO. If a form field "...&carrid=..." is added to the URL of the service, the content of this field is used as a key for selecting associated data from the database table SPFLI. This is achieved by the class CL\_HTTP\_EXT\_SERVICE\_DEMO implementing the interface IF\_HTTP\_EXTENSION and its method HANDLE\_REQUEST. This method is called by ICF and a reference is passed to a server object that implements the interface IF\_HTTP\_SERVER. The attributes REQUEST and RESPONSE of this interface refer to objects, which are implemented by the interfaces IF\_HTTP\_REQUEST or IF\_HTTP\_RESPONSE. The REQUEST object is used to read the form field. The RESPONSE object returns the result.

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

The built-in function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) and the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG are using to prevent [cross site scripting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_glosry.htm "Glossary Entry") and [SQL injections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injection_glosry.htm "Glossary Entry"). The content of the internal table connections (filled in accordance with the passed form field) is converted to HTML using the class CL\_DEMO\_OUTPUT before it is passed to the RESPONSE object.

Note

The HTTP service must be activated in transaction SICF before the example can work.


### abenicf_post_service_abexa.htm

---
title: "Calling an HTTP Service Using the POST Method"
description: |
  This example demonstrates calls of an HTTP service in ICF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm 'Glossary Entry') and a Web browser. The input data is passed using the POST method. Source Code REPORT demo_http_post_service. CLASS demo DEFINITION. PUBLIC S
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_post_service_abexa.htm"
abapFile: "abenicf_post_service_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenicf", "post", "service", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm) → 

Calling an HTTP Service Using the POST Method

This example demonstrates calls of an HTTP service in [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry") and a Web browser. The input data is passed using the POST method.

Source Code

REPORT demo\_http\_post\_service.
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
    DATA(url) = icf\_node &&
                \`?sap-client=\` && sy-mandt &&
                \`&sap-language=\`
                  && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ).
    cl\_demo\_output=>display\_html(
      |<html>| &&
      |<body>| &&
      |Link to HTTP-Service:<br><br>| &&
      |<a href="{ url }" target="\_blank">{ url }</a>| &&
      |</body>| &&
      |</html>| ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_post\`.
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

This example has the same structure as the executable example [Calling an HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm). In this case, the method IF\_HTTP\_EXTENSION~HANDLE\_REQUEST of the class CL\_HTTP\_EXT\_SERVICE\_POST\_DEMO is used to demonstrate how user input sent by a HTML page form generated by the handler class is sent using the POST method and read using the method GET\_CDATA.

Note

The HTTP service must be activated in transaction SICF before the example can work.


### abenicf_client_abexa.htm

---
title: "ABAP as HTTP Client"
description: |
  This example demonstrates an ICF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm 'Glossary Entry') client object. Source Code REPORT demo_http_client. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA q
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_client_abexa.htm"
abapFile: "abenicf_client_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenicf", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm) → 

ABAP as HTTP Client

This example demonstrates an [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry") client object.

Source Code

REPORT demo\_http\_client.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA query TYPE string VALUE 'SAP'.
    cl\_demo\_input=>request( CHANGING field = query ).
    cl\_http\_client=>create(
      EXPORTING
        host =    'wikipedia.org'
        service = ''
      IMPORTING
        client = DATA(client)
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    cl\_http\_utility=>set\_request\_uri(
      request = client->request
      uri     = \`/wiki/\` && query ).
    client->send(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = DATA(smsg) ).
      cl\_demo\_output=>display( smsg ).
      RETURN.
    ENDIF.
    client->receive(
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      client->get\_last\_error(
        IMPORTING message = DATA(rmsg) ).
      cl\_demo\_output=>display( rmsg ).
      RETURN.
    ENDIF.
    DATA(html) = client->response->get\_cdata( ).
    cl\_demo\_output=>display\_html( html ).
    client->close( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The factory method CREATE of the class CL\_HTTP\_CLIENT is used to create a client object for the address wikipedia.org. The reference variable client of the type IF\_HTTP\_CLIENT points to this object. A specific request, which also contains the value of a user input, is added to the URI of the REQUEST object of the client object. The request is sent and the result is passed to the RESPONSE object of the client object. In the case in question, the HTML page produced by the requested is retrieved and displayed.

Note

The proxy setting for the HTTP client must be configured correctly in transaction SICF before this example can work.


### abenicf_mime_pictures_abexa.htm

---
title: "Accessing the MIME Repository Using ICF"
description: |
  This example demonstrates how the MIME repository is accessed using a HTTP service in ICF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm 'Glossary Entry'). Source Code REPORT demo_picture_from_mime. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. CLASS-
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_mime_pictures_abexa.htm"
abapFile: "abenicf_mime_pictures_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenicf", "mime", "pictures", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm) → 

Accessing the MIME Repository Using ICF

This example demonstrates how the MIME repository is accessed using a HTTP service in [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_picture\_from\_mime.
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
    cl\_demo\_output=>display\_html(
      \`<html><body><basefont face="arial">\`                &&
      \`Picture from MIME Repository<br><br>\`               &&
       \`<img src="\` && icf\_node
                    && \`/ABAP\_Docu\_Logo.gif?sap-client=\`
                    && sy-mandt
                    && \`">\`                                &&
       \`</body></html>\`  ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/mime\_demo\`.
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

If a path to a HTTP service from ICF is constructed in the same way in transaction SICF as the path to a MIME repository node and the handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the service, the service can be used to access the MIME objects of this node directly.

The example contains the node /sap/public/bc/abap/mime\_demo in both the transaction SICF and in the MIME repository. The image ABAP\_Docu\_Logo.gif is saved in the MIME repository under this node. The handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the ICF node. The name of the image can be added to the URL of the service and used to access the image directly.

See also the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmime_pictures_abexa.htm) for accessing objects from the MIME repository using the associated API.


### abenhttp_mime_pictures_abexa.htm

---
title: "Accessing the MIME Repository from a HTTP Service"
description: |
  This example demonstrates how the MIME repository is accessed using an HTTP service in ICF(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm 'Glossary Entry'). Source Code REPORT demo_http_mime. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. CLASS-METHODS
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhttp_mime_pictures_abexa.htm"
abapFile: "abenhttp_mime_pictures_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenhttp", "mime", "pictures", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) →  [ICF Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm) → 

Accessing the MIME Repository from a HTTP Service

This example demonstrates how the MIME repository is accessed using an HTTP service in [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_glosry.htm "Glossary Entry").

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

-   If the form field has the value icf, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates an HTML file. This file points to an image in the MIME repository (as described in a different executable [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_mime_pictures_abexa.htm)).

-   If the form field has the value api, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates the HTML file and also the image that is referenced in the HTML file. The image is loaded and forwarded using MIME-API.


### abenicf_abexas.htm

---
title: "ICF Examples"
description: |
  !Example(exa.gif 'Example') Calling an HTTP Service(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm) !Example(exa.gif 'Example') Calling an HTTP Service Using the POST Method(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_post_service_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_abexas.htm"
abapFile: "abenicf_abexas.htm"
keywords: ["do", "if", "method", "data", "abenicf", "abexas"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ICF - Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) → 

ICF Examples

Continue
![Example](exa.gif "Example") [Calling an HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_service_abexa.htm)
![Example](exa.gif "Example") [Calling an HTTP Service Using the POST Method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_post_service_abexa.htm)
![Example](exa.gif "Example") [ABAP as HTTP Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_client_abexa.htm)
![Example](exa.gif "Example") [Accessing the MIME Repository Using ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf_mime_pictures_abexa.htm)
![Example](exa.gif "Example") [Accessing the MIME Repository from a HTTP Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhttp_mime_pictures_abexa.htm)
