  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  G

GET node - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm)

Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Effect

Obsolete: Introduces an event block whose event is triggered by a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") when data records of the node node are read.

Additions

-   LATE
    Event if the logical database has read all the data records of a node node.
    
-   FIELDS f1 f2 ...
    Specifies which fields are read from the logical database.