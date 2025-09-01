  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenother_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System-Dependent%20Program%20Flow%2C%20ABENSYSTEM_DEPENDENT_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System-Dependent Program Flow

The use of the following [system fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_field_glosry.htm "Glossary Entry") in ABAP programs to control program behavior can be a security risk:

-   sy-host
-   sy-sysid
-   sy-mandt

As a [user-specific program flow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_dependent_scrty.htm), it may in the worst case constitute a real back door that can be used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, source code that depends on the above system fields should always be avoided and removed. Instead, suitable APIs or fully separate implementations should be used. In cases where the use of the above system fields in logical expressions is absolutely necessary, a special exemption must be granted for the program, so that it can pass the appropriate security tests.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.