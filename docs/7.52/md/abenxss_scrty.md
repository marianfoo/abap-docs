  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_programming_scrty.htm) → 

Cross Site Scripting

Cross site scripting ([XSS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxss_glosry.htm "Glossary Entry")) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that cannot be covered in full here and ABAP application developers are not usually concerned with creating Web pages directly. These pages are normally wrapped in frameworks such as SAPUI5, Web Dynpro or Web Services and these frameworks are responsible for the necessary security.

An ABAP program is itself responsible for security only in the very rare cases where it is not part of one of these frameworks and generates HTML pages itself, for example directly using [Internet Communication Framework](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry") (transaction SICF). The predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm) is most often used to do this. Other escape methods, such as the classes CL\_HTTP\_UTILITY, CL\_HTTP\_SERVER, and CL\_HTTP\_CLIENT are obsolete and should no longer be used.

Note

[Business Server Pages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry") (BSP) are an exception to the rule above: When Business Server Pages are created, ABAP application developers can also be faced with HTML pages and must take the appropriate security precautions. More specifically, the attribute <htmlb:content forceEncode="ENABLED"> must be set in the HTMLB Library and obsolete values such as CLASSIC or DESIGN2002 can no longer be specified in the attribute design.

Executable Examples

-   The example [String Functions, escape for XSS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_function_esc_xss_abexa.htm) demonstrates simple cross site scripting possible when input is not masked and is used on a generated HTML page.

-   In the [ICF Services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenicf_service_abexa.htm) example, the class CL\_HTTP\_EXT\_SERVICE\_DEMO uses the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm) to prevent cross site scripting.