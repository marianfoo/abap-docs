  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSERT%2C%20ABAPASSERT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSERT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm)

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* log\_exp.

Effect

Defines an [assertion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertion_glosry.htm "Glossary Entry"). If the logical expression log\_exp is false, either the program terminates with a runtime error, or processing switches to the ABAP debugger, or a log entry is created.

Additions   

-   ID group
    Assigns the assertion to a [checkpoint group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation and behavior.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the content of data objects val1 val2 ... to the log or the [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry").
-   CONDITION
    Must be specified before log\_exp if one of the other additions is specified.