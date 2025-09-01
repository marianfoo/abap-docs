  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenother_programming_scrty.htm) → 

Obscuring ABAP Source Code

[ABAP source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is obscured if tasks that can be performed directly are instead performed across diversions that disguise the real purpose. One common form of obscured code is found when information that could be specified statically is specified using dynamic programming techniques instead. Code can be obscured for one of the following reasons:

-   One form of obscured code (which is not directly malicious) is often used to bypass static checks, for example to disguise false positives.

-   Code is obscured for malicious purposes to disguise back doors and other forms of attacks using injections.

In general, any type of obscured code presents a security risk. Instead of bypassing static checks by using obscured code, false positives should be handled using other methods, such as exemptions. Obscured code can often only be detected using a two-man rule (code inspections).

Example

Maliciously obscured code in a [user-dependent program flow](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_dependent_scrty.htm), which can generally only be detected using code inspections.

DATA(field)  = \`SY-UNAME\`.
ASSIGN (field) TO FIELD-SYMBOL(<field>).
...
IF <field> = \`...\`.
  ...
ENDIF.

Example

Code obscured without malicious intent. In a HTTP request handler, a HTML file is created by calling a method in which potential [cross site scripting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxss_glosry.htm "Glossary Entry") (XSS) has already been prevented. A static security check that ignores the called method can classify this as a security risk, however, and demand that the HTML is masked again. The dynamic assignment of the HTML to a field symbol is used to bypass the false positive raised by the security check.

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  DATA(html\_name) = \`HTML\`.
  ASSIGN (html\_name) TO FIELD-SYMBOL(<html>).
  server->response->set\_cdata( data = <html> ).
ENDMETHOD.

The correct forma of the HTTP request handler would be:

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  server->response->set\_cdata( data = html ).
ENDMETHOD.

If the security check raises a false positive, either an exemption or an improvement to the check should be requested.