  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  A

ASSERT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm)

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* log\_exp.

Effect

Defines an [assertion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertion_glosry.htm "Glossary Entry"). If the logical expression log\_exp is false, either the program terminates with a runtime error, or processing switches to the ABAP debugger, or a log entry is created.

Additions

-   ID group
    Assigns the assertion to a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation and behavior.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the content of data objects val1 val2 ... to the log or the [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry").
-   CONDITION
    Must be specified before log\_exp if one of the other additions is specified.