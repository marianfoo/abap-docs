  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Further Security Risks](javascript:call_link\('abenother_programming_scrty.htm'\)) → 

Obscuring ABAP Source Code

[ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") is obscured if tasks that can be performed directly are instead performed across diversions that disguise the real purpose. One common form of obscured code is found when information that could be specified statically is specified using dynamic programming techniques instead. Code can be obscured for one of the following reasons:

-   One form of obscured code (which is not directly malicious) is often used to bypass static checks, for example to disguise false positives.

-   Code is obscured for malicious purposes to disguise back doors and other forms of attacks using injections.

In general, any type of obscured code presents a security risk. Instead of bypassing static checks by using obscured code, false positives should be handled using other methods, such as exemptions. Obscured code can often only be detected using a two-man rule (code inspections).

Example

Maliciously obscured code in a [user-dependent program flow](javascript:call_link\('abenuser_dependent_scrty.htm'\)), which can generally only be detected using code inspections.

DATA(field)  = \`SY-UNAME\`.
ASSIGN (field) TO FIELD-SYMBOL(<field>).
...
IF <field> = \`...\`.
  ...
ENDIF.

Example

Code obscured without malicious intent. In a HTTP request handler, a HTML file is created by calling a method in which potential [cross site scripting](javascript:call_link\('abenxss_glosry.htm'\) "Glossary Entry") (XSS) has already been prevented. A static security check that ignores the called method can classify this as a security risk, however, and demand that the HTML is masked again. The dynamic assignment of the HTML file to a field symbol is used to bypass the false positive raised by the security check.

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  DATA(html\_name) = \`HTML\`.
  ASSIGN (html\_name) TO FIELD-SYMBOL(<html>).
  server->response->set\_cdata( data = <html> ).
ENDMETHOD.

The correct form of the HTTP request handler would be:

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  server->response->set\_cdata( data = html ).
ENDMETHOD.

If the security check raises a false positive, either an exemption or an improvement to the check should be requested.