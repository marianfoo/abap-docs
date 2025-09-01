  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm) →  [DATA, TABLE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20tabkeys%2C%20ABAPDATA_KEYDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, tabkeys

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_shortref.htm)

Syntax

... *\[* WITH [key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm) *\]*
    *\[* WITH [secondary\_key1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm) *\]* *\[* WITH [secondary\_key2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm) *\]* ...

Effect

Definition of the table keys of an internal table. The following can be defined:

-   A [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") using [key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm).
    
    Every internal table has a primary key. The primary key must be defined explicitly for [sorted tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry"). The specification for the primary key can only be omitted for [standard tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry"). The primary table key is then defined automatically as a non-unique [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_key_glosry.htm "Glossary Entry").
    
-   Multiple [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") with [secondary\_key1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm), [secondary\_key2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm), ...
    
    The specification of secondary keys is optional for all table categories. If no secondary key is specified, the internal table has only one primary key.
    

Example

Declaration of a [hashed table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry") with a unique primary key and two non-unique secondary [sorted keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry"), cityfrom\_to and airp\_from\_to.

DATA spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Continue
[DATA, key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_primary_key.htm)
[DATA, secondary\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_secondary_key.htm)