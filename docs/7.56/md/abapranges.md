  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with a Header Line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_header_line.htm) → 

RANGES

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapranges_shortref.htm)

Obsolete Syntax

RANGES range\_tab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry"). This statement, which is forbidden in classes, is a short form of the following statement string which is also not allowed in classes:

[DATA: BEGIN OF range\_tab OCCURS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_begin_of_occurs.htm) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF range\_tab.

Declares an internal table range\_tab with the structure of a [ranges table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenranges_table_glosry.htm "Glossary Entry") and a [header line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry"). Without the addition [OCCURS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_occurs.htm), the initial memory requirement of the ranges table is set to ten lines. The addition OCCURS can be used to specify either a numeric literal or a numeric constant n to determine a different initial memory requirement.

Hints

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_ranges.htm) and [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_ranges.htm). If used, these declare ranges tables without header lines.
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.