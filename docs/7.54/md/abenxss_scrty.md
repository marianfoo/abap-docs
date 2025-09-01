  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

Cross Site Scripting

Cross site scripting ([XSS](javascript:call_link\('abenxss_glosry.htm'\) "Glossary Entry")) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that cannot be covered in full here and ABAP application developers are not usually concerned with creating Web pages directly. These pages are normally wrapped in frameworks such as SAPUI5, Web Dynpro or Web Services and these frameworks are responsible for the necessary security.

An ABAP program is itself responsible for security only in the very rare cases where it is not part of one of these frameworks and generates HTML pages itself, for example directly using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry") (transaction SICF). The built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)) is most often used to do this. Other escape methods, such as the classes CL\_HTTP\_UTILITY, CL\_HTTP\_SERVER, and CL\_HTTP\_CLIENT are obsolete and should no longer be used.

Note

[Business Server Pages](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") (BSP) are an exception to the rule above: When Business Server Pages are created, ABAP application developers can also be faced with HTML pages and must take the appropriate security precautions. More specifically, the attribute <htmlb:content forceEncode="ENABLED"> must be set in the HTMLB Library and obsolete values such as CLASSIC or DESIGN2002 can no longer be specified in the attribute design.

Executable Examples

-   The example [String Functions, escape for XSS](javascript:call_link\('abenstring_function_esc_xss_abexa.htm'\)) demonstrates simple cross site scripting possible when input is not masked and is used on a generated HTML page.

-   In the [ICF Services](javascript:call_link\('abenicf_service_abexa.htm'\)) example, the class CL\_HTTP\_EXT\_SERVICE\_DEMO uses the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)) to prevent cross site scripting.