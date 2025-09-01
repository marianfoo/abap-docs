# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / ICF - Internet Communication Framework

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenicf.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf.htm)
- [abenicf_post_service_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_post_service_abexa.htm)
- [abenicf_client_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_client_abexa.htm)
- [abenicf_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_mime_pictures_abexa.htm)
- [abenhttp_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhttp_mime_pictures_abexa.htm)
- [abenicf_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_abexas.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.735Z

---

### abenicf.htm

> **📖 Official SAP Documentation**: [abenicf.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ICF - Internet Communication Framework

Internet Communication Framework (ICF) is a programming interface (API), based on interfaces and classes, used by ABAP programs to communicate with the Internet. ICF supports the Internet protocols HTTP, HTTPS, and SMTP. All communication between ABAP and the Internet based on these protocols takes place using ICF. ICF is a simplified technical foundation that can be used by more advanced programming interfaces. This means that ABAP programs do not usually access ICF directly and wrappers are accessed instead, such as [Business Server Pages](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry"), [Web Dynpro ABAP](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry"), or the OData-based [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). Wrappers like these make sure that the conventions required by external communication are met, such as the Model View Controller (MVC) approach in Web Dynpro or stateless AS ABAP in [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry").

-   [ICF Overview](#abenicf-1--------as-abap-as-an-icf-server---@ITOC@@ABENICF_2)

-   [AS ABAP as an ICF Client](#abenicf-3--------icf-security---@ITOC@@ABENICF_4)

-   [More Information](#abenicf-5---hint--information-about-communication-using-the-websocket-protocol-or-tcp-can-be-found-under--abap-push-channels--javascript-call-link---abenapc-htm-------icf-overview--the-following-figure-is-a--highly-simplified--schematic-overview-of-communications-between-abap-and-the-internet-using-icf--it-uses-http-communication-as-an-example-----figure--abdoc-icf-gif---the-actual-communication-of--as-abap--javascript-call-link---abenas-abap-glosry-htm-----glossary-entry---with-the-internet-takes-place-through-its--internet-communication-manager--javascript-call-link---abeninternet-con-man-glosry-htm-----glossary-entry----icm---the-manager-itself-communicates-with-an--as-abap--javascript-call-link---abenas-abap-glosry-htm-----glossary-entry---work-process--whose-task-handler-controls-icf---communication-can-run-in-either-direction--meaning-that-as-abap-can-be-a-server-or-a-client--within-icf--this-aspect-is-implemented-using-different-branches-with-their-own-interfaces-and-classes--abap-programs-can-both-respond-to-requests-from-the-internet-and-provide-a-service-with-data-for-further-handling-and-itself-query-data-from-internet--this-is-done-by-implementing-the-appropriate-interfaces---hints------before-each-response-is-sent-as-icf-server-or-icf-client-in-an-as-abap--a--database-commit--javascript-call-link---abendatabase-commit-glosry-htm-----glossary-entry---is-executed--except-in--updates--javascript-call-link---abenupdate-glosry-htm-----glossary-entry----------requests-sent-from-icm-to-an-as-abap-open-a-separate--icf--javascript-call-link---abenicf-session-glosry-htm-----glossary-entry---session-here--where-as-abap-can-process-the-request-as-an-icf-server-------http-https-communication-is-not-bidirectional--which-means-that-one-partner-is-always-the-client-and-one-partner-is-always-the-server--bidirectional-communication-is-possible-using-the-websocket-protocol-or-tcp-with--abap-push-channels--javascript-call-link---abenapc-htm-------as-abap-as-an-icf-server--each-service-that-is-reachable-from-the-internet-and-for-which-as-abap-is-used-as-an-icf-server-must-be-created-as-a-node-in-the-service-tree-in-the-service-editor--transaction-sicf---a-service-of-this-type-is-a-transportable-repository-object-that-determines-the-properties-of-the-service---the-initial-node-of-the-service-tree-stands-for-the-as-abap-web-address-consisting-of-the-host-and-the-port--the-position-of-the-node-in-the-tree-determines-the-further-url-path-required-to-call-a-specific-service--a-url-can-contain-form-fields-after-the-actual-address-part--which-are-read-by-icf---before-a-response-can-be-made-to-a-http-request-sent-to-a-service-in-the-service-tree-in-transaction-sicf--at-least-one-global-class-must-be-assigned-to-this-service--this-class-must-implement-the-interface-if--http--extension-and-have-access-to-the-icf-infrastructure--when-a-request-is-sent-to-the-service--icf-creates-a-http-request-handler-as-an-instance-of-this-class--the-implemented-interface-has-only-one-method--handle--request--whose-input-parameter-server-is-a-reference-to-the-server-object-represented-by-if--http--server--the-attributes-and-methods-of-the-server-object-make-it-possible-to-query-properties-of-the-request--such-as-the-content-of-the-form-fields-in-the-url-and-to-pass-data-to-the-server-in-a-suitable-format--such-as-html-or-xml--the-most-important-are-the-attributes-request-and-response--which-refer-to-objects-that-implement-the-interfaces-if--http--request-or-if--http--response---an-http-https-request-in-an-http-request-handler-is-handled-as--icf-processing--javascript-call-link---abenicf-processing-glosry-htm-----glossary-entry---in-a-separate--icf-session--javascript-call-link---abenicf-session-glosry-htm-----glossary-entry----here--certain-statements--like--message--javascript-call-link---abapmessage-htm-----or--break-point--javascript-call-link---abapbreak-point-htm------are-handled-differently-than--for-example--in-dialog-processing--external-breakpoints-can-be-set-to-debug-programs-during-icf-processing---hints------special-url-form-fields--such-as-sap-user--sap-client--or-sap-language--all-start-with-the-prefix-sap--and-are-evaluated-accordingly-when-logons-are-made-to-an-icf-session-------a-special-handler-class-can-be-used-to-access-objects-from-the-mime-repository-directly-using-icf-services--see-the--executable-example--javascript-call-link---abenicf-mime-pictures-abexa-htm------------alongside-the-nodes-that-represent-http-services--the-nodes-for--abap-push-channels--javascript-call-link---abenapc-htm-----addressed-using-the-websocket-protocol-or-tcp-are-defined-in-the-service-tree-in-icf---executable-examples-------calling-an-http-service--javascript-call-link---abenicf-service-abexa-htm----------one-production-example-of-a-self-programmed-http-service-is-the-web-version-of-this-documentation-itself--as-abap-as-an-icf-client--if-the-proxy-setting-for-the-http-client-is-configured-appropriately-in-transaction-sicf--abap-programs-can-send-requests-to-the-internet-using-icf-and-receive-responses--this-is-done-using-client-objects-from-the-class-cl--http--client--which-implements-the-interface-if--http--client--a-client-object-can-be-created-using-a-factory-method-from-this-class--which-associates-it-with-a-web-address--like-a-server-object--the-attributes-request-and-response-reference-objects-that-implement-the-interfaces-if--http--request-or-if--http--response-and-that-can-be-used-to-send-requests-and-receive-responses---executable-example--abap-as--http-client--javascript-call-link---abenicf-client-abexa-htm------icf-security--the-api-of-icf-enables-virus-scans-to-be-run-using-the-virus-scan-interface--vsi---the-required-virus-scan-profile-for-the-scan-can-be-selected---if-html-pages-can-be-created-on-an-icf-server--it-may-be-possible-to-prevent--cross-side-scripting--javascript-call-link---abenxss-scrty-htm------this-is-usually-a-task-of-frameworks-based-on-icf-but-it-is-also-important-not-to-forget-this-for-directly-created-html-pages---other-security-gaps-also-need-to-be-blocked--for-example--pages-delivered-from-an-icf-server-should-be-protected-against-clickjacking-attacks--a-clickjacking-attack-integrates-a-page-into-the-framework-of-an-external-web-page-and-tricks-the-reader-into-clicking-on-malicious-links--this-can-be-prevented-in-the-http-request-handler-by-using-a-method-call--server--response--set--header--field--name----x-frame-options--value---------------provided-that-the-values-sameorigin-or-deny-can-be-passed-to-value--server-is-a-reference-variable--which-points-to-the-server-object----more-information------detailed-information-about-icf-and-icm-can-be-found-in-the-internet-communication-framework-documentation-in-sap-help-portal-------this-documentation-also-describes-communication-between-as-abap-and-the-internet--based-on-class-wrappers-or-icf-enhancements-such-as-abap-web-services-or-the-abap-rest-library---continue--icf---examples--javascript-call-link---abenicf-abexas-htm-----------abenicf-abexas-htm-------------as-abap-release-755---copyright-2020-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------data-interfaces-and-communication-interfaces--javascript-call-link---abenabap-data-communication-htm---------icf---internet-communication-framework--javascript-call-link---abenicf-htm---------icf---examples--continue---example--exa-gif--example----icf---calling-an-http-service--javascript-call-link---abenicf-service-abexa-htm-------example--exa-gif--example----icf---calling-an-http-service-using-the-post-method--javascript-call-link---abenicf-post-service-abexa-htm-------example--exa-gif--example----icf---abap-as-http-client--javascript-call-link---abenicf-client-abexa-htm-------example--exa-gif--example----icf---accessing-the-mime-repository-using-icf--javascript-call-link---abenicf-mime-pictures-abexa-htm-------example--exa-gif--example----icf---accessing-the-mime-repository-from-a-http-service--javascript-call-link---abenhttp-mime-pictures-abexa-htm-----------abenicf-service-abexa-htm-------------as-abap-release-755---copyright-2020-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------data-interfaces-and-communication-interfaces--javascript-call-link---abenabap-data-communication-htm---------icf---internet-communication-framework--javascript-call-link---abenicf-htm---------icf---examples--javascript-call-link---abenicf-abexas-htm---------icf---calling-an-http-service--this-example-demonstrates-how-an--icf--javascript-call-link---abenicf-glosry-htm-----glossary-entry---http-service-is-called-directly-using-a-web-browser---source-code--report-demo--http--service--class-demo-definition----public-section------class-methods-main------class-methods-class--constructor----private-section------class-data-icf--node-type-string--endclass--class-demo-implementation----method-main------if-icf--node-is-initial--------return------endif------data-carrid-type-spfli-carrid-value--aa-------cl--demo--input--request--changing-field---carrid--------data-url----icf--node-----------------------sap-client-------sy-mandt-----------------------sap-language-------------------------cl--i18n--languages--sap1--to--sap2--sy-langu-------------------------carrid-----------carrid------cl--demo--output--display--html----------html--------------body-------------link-to-http-service--br--br--------------a-href----url----target----blank----url----a---------------body---------------html-------endmethod----method-class--constructor------constants-path-type-string-value----sap-bc-abap-demo--------data-location----------cl--http--server--get--location--application---path--------if-location-is-not-initial--------icf--node---location----path------endif----endmethod--endclass--start-of-selection----demo--main------description--any-http-service-defined-in-the-service-transaction-sicf-can-be-tested-here--if-the-url-of-the-service-is-known--it-can-be-called-from-the-internet--for-example-by-entering-an-address-in-a-browser--in-this-example--a-service-of-this-type-is-called-using-a-generated-webpage--which-contains-a-link-to-the-url-of-the-service--the-url-is-constructed-from-the-host-and-port-of-the-current-as-instance--the-path-in-the-service-tree--and-a-form-field--the-host-and-port-are-filled-using-the-method-cl--http--server--get--location--the-form-field-carrid-is-filled-with-the-content-of-a-field-filled-previously-by-user-input--when-this-link-is-chosen--the-browser-displays-the-html-page-returned-by-the-service--the-content-of-the-form-field-carrid-can-be-modified-in-the-input-field-of-the-browser--to-display-different-data---the-called-http-service-is-defined-as-the-node--sap-bc-abap-demo-in-the-transaction-sicf--the-assigned-http-request-handler-is-the-class-cl--http--ext--service--demo--if-a-form-field------carrid------is-added-to-the-url-of-the-service--the-content-of-this-field-is-used-as-a-key-for-selecting-associated-data-from-the-database-table-spfli--this-is-achieved-by-the-class-cl--http--ext--service--demo-implementing-the-interface-if--http--extension-and-its-method-handle--request--this-method-is-called-by-icf-and-a-reference-is-passed-to-a-server-object-that-implements-the-interface-if--http--server--the-attributes-request-and-response-of-this-interface-refer-to-objects--which-are-implemented-by-the-interfaces-if--http--request-or-if--http--response--the-request-object-is-used-to-read-the-form-field--the-response-object-returns-the-result---method-if--http--extension-handle--request----select-------------from-spfli----------where-carrid---( to\_upper(
           cl\_abap\_dyn\_prg=>escape\_quotes(
             val = escape( val = server->request->get\_form\_field(
                                                    name = \`carrid\` )
                           format = cl\_abap\_format=>e\_xss\_ml ) ) ) )
         INTO TABLE @DATA(connections) ##no\_text.
  "cl\_demo\_output=>get converts ABAP data to HTML and is secure
  server->response->set\_cdata(
    data = cl\_demo\_output=>get( connections ) ).
ENDMETHOD.

The built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)) and the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG are using to prevent [cross site scripting](javascript:call_link\('abenxss_glosry.htm'\) "Glossary Entry") and [SQL injections](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry"). The content of the internal table connections (filled in accordance with the passed form field) is converted to HTML using the class CL\_DEMO\_OUTPUT before it is passed to the RESPONSE object.

Hint

The HTTP service must be activated in transaction SICF before the example can work.



**📖 Source**: [abenicf.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf.htm)

### abenicf_post_service_abexa.htm

> **📖 Official SAP Documentation**: [abenicf_post_service_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_post_service_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) →  [ICF - Examples](javascript:call_link\('abenicf_abexas.htm'\)) → 

ICF - Calling an HTTP Service Using the POST Method

This example demonstrates calls of an HTTP service in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") and a Web browser. The input data is passed using the POST method.

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

This example has the same structure as the executable example [Calling an HTTP Service](javascript:call_link\('abenicf_service_abexa.htm'\)). In this case, the method IF\_HTTP\_EXTENSION~HANDLE\_REQUEST of the class CL\_HTTP\_EXT\_SERVICE\_POST\_DEMO is used to demonstrate how user input sent by a HTML page form generated by the handler class is sent using the POST method and read using the method GET\_CDATA.

Hint

The HTTP service must be activated in transaction SICF before the example can work.



**📖 Source**: [abenicf_post_service_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_post_service_abexa.htm)

### abenicf_client_abexa.htm

> **📖 Official SAP Documentation**: [abenicf_client_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_client_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) →  [ICF - Examples](javascript:call_link\('abenicf_abexas.htm'\)) → 

ICF - ABAP as HTTP Client

This example demonstrates an [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") client object.

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

Hint

The proxy setting for the HTTP client must be configured correctly in transaction SICF before this example can work.



**📖 Source**: [abenicf_client_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_client_abexa.htm)

### abenicf_mime_pictures_abexa.htm

> **📖 Official SAP Documentation**: [abenicf_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_mime_pictures_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) →  [ICF - Examples](javascript:call_link\('abenicf_abexas.htm'\)) → 

ICF - Accessing the MIME Repository Using ICF

This example demonstrates how the MIME repository is accessed using a HTTP service in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry").

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

See also the [executable example](javascript:call_link\('abenmime_pictures_abexa.htm'\)) for accessing objects from the MIME repository using the associated API.



**📖 Source**: [abenicf_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_mime_pictures_abexa.htm)

### abenhttp_mime_pictures_abexa.htm

> **📖 Official SAP Documentation**: [abenhttp_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhttp_mime_pictures_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) →  [ICF - Examples](javascript:call_link\('abenicf_abexas.htm'\)) → 

ICF - Accessing the MIME Repository from a HTTP Service

This example demonstrates how the MIME repository is accessed using an HTTP service in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry").

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

-   If the form field has the value icf, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates an HTML file. This file points to an image in the MIME repository (as described in a different executable [example](javascript:call_link\('abenicf_mime_pictures_abexa.htm'\))).

-   If the form field has the value api, the handler class CL\_HTTP\_EXT\_MIME\_DEMO creates the HTML file and also the image that is referenced in the HTML file. The image is loaded and forwarded using MIME API.



**📖 Source**: [abenhttp_mime_pictures_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhttp_mime_pictures_abexa.htm)

### abenicf_abexas.htm

> **📖 Official SAP Documentation**: [abenicf_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenicf_abexas.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_abexas.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) → 

ICF - Examples

Continue
![Example](exa.gif "Example") [ICF - Calling an HTTP Service](javascript:call_link\('abenicf_service_abexa.htm'\))
![Example](exa.gif "Example") [ICF - Calling an HTTP Service Using the POST Method](javascript:call_link\('abenicf_post_service_abexa.htm'\))
![Example](exa.gif "Example") [ICF - ABAP as HTTP Client](javascript:call_link\('abenicf_client_abexa.htm'\))
![Example](exa.gif "Example") [ICF - Accessing the MIME Repository Using ICF](javascript:call_link\('abenicf_mime_pictures_abexa.htm'\))
![Example](exa.gif "Example") [ICF - Accessing the MIME Repository from a HTTP Service](javascript:call_link\('abenhttp_mime_pictures_abexa.htm'\))
