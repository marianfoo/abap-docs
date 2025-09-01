  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  A

ASSERT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm)

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* log\_exp.

Effect

Defines an [assertion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassertion_glosry.htm "Glossary Entry"). If the logical expression log\_exp is false, either the program terminates with a runtime error, or processing switches to the ABAP debugger, or a log entry is created.

Additions

-   ID group
    Assigns the assertion to a [checkpoint group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation and behavior.
    
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
    
-   FIELDS val1 val2 ...
    Writes the content of data objects val1 val2 ... to the log or the [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry").
    
-   CONDITION
    Must be specified before log\_exp if one of the other additions is specified.