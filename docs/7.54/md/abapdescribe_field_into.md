  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe.htm) →  [DESCRIBE - internal variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescribe_internal.htm) → 

DESCRIBE FIELD INTO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DESCRIBE FIELD dobj INTO td.

Effect

All attributes of the field f, its components, subcomponents, and so on, are in the output of the field td (type description). td must have the type SYDES\_DESC, defined in the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") SYDES.

The structure SYDES\_DESC has two table-like components TYPES and NAMES:

-   The tree structure of the type belonging to f is mapped to TYPES. The components of a node are stored in the table TYPES in a continuous manner. The beginning and end of the row area that represents the components are stored in TYPES-FROM and TYPES-TO. The reference to the superior node can be found in TYPES-BACK. If no superior or subordinate node exists, then this is marked by the value 0 (for the relevance of further components, see the following sections).
    
-   The names of components, types, and so on. are not stored directly in TYPES. Instead, the components TYPES-IDX\_... hold an index in the name table NAMES. The value 0 indicates that there is no reference to the name table.
    NAMES contains the names in the component NAMES-NAME, possibly in parts. If a name continues in the following row, this is indicated by an asterisk ('\*') in the component NAMES-CONTINUE.
    

The type description table (TYPES) not only stores information about the tree structure but also further information about the type of f or its components. In particular, this includes all information that can be determined using the usual additions of DESCRIBE FIELD. In detail, TYPES contains the following columns:

IDX\_NAME

Component name

IDX\_USER\_TYPE

Name of a user-defined type, in other words a type defined by a [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm) statement. Derived types (... TYPE A-B) and structures from ABAP Dictionary are not considered to be user-defined types.

CONTEXT

For user-defined types only: The context in which the type is defined. Possible values are defined in the constant SYDES\_CONTEXT of the type group SYDES. Only use these constants to carry out a comparison. The following type contexts are distinguished:
SYDES\_CONTEXT-PROGRAM: Program-global type
SYDES\_CONTEXT-FORM : FORM\-local type
SYDES\_CONTEXT-FUNCTION: FUNCTION\-local type
SYDES\_CONTEXT-METHOD : METHOD\-local type

IDX\_CONTEXT\_NAME

For user-defined types only:
In a local context: The name of the FORM or FUNCTION in which the type was defined. The name of the associated program is then the first entry in the name table.
In a global context: The name of the program in which the type was defined.

IDX\_EDIT\_MASK

Conversion routine from ABAP Dictionary, like the addition EDIT MASK in a simple DESCRIBE.

IDX\_HELP\_ID

Help ID when referencing fields from ABAP Dictionary

LENGTH

Internal length, like the addition LENGTH in a simple DESCRIBE

OUTPUT\_LENGTH

Output length, like the addition OUTPUT-LENGTH in a simple DESCRIBE

DECIMALS

Number of [decimal digits](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecimal_place_glosry.htm "Glossary Entry"), like the addition DECIMALS in a simple DESCRIBE

TYPE

ABAP type, like the addition TYPE in a simple DESCRIBE. If DESCRIBE INTO is applied to a nested structure which contains a [boxed component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenboxed_component_glosry.htm "Glossary Entry"), the type is returned with the internal ID j ([static box](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_box_glosry.htm "Glossary Entry")).

TABLE\_KIND

A [table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) is stored here for the components which represent an internal table. The same values are returned as with the variant [DESCRIBE TABLE itab KIND k](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_table.htm). For components which do not represent a table, the return code is set to SYDES\_KIND-UNDEFINED (see type group SYDES).

Example

Take the following definition of the complex data type EMPLOYEE\_STRUC:

PROGRAM DESCTEST.
TYPES: BEGIN OF name\_struc,
         first  TYPE c LENGTH 20,
         last   TYPE c LENGTH 20,
       END OF name\_struc,
       BEGIN OF absence\_time\_struc,
         day        TYPE d,
         from       TYPE t,
         to         TYPE t,
       END OF absence\_time\_struc,
       phone\_number TYPE n LENGTH 20,
       BEGIN OF employee\_struc,
         id         LIKE sbook-customid,
         name       TYPE name\_struc,
         BEGIN OF address,
           street  TYPE c LENGTH 30,
           zipcode TYPE n LENGTH 4,
           place   TYPE c LENGTH 30,
         END OF address,
         salary\_per\_month TYPE p LENGTH 10 DECIMALS 3,
         absent           TYPE STANDARD TABLE OF absence\_time\_struc
                               WITH NON-UNIQUE DEFAULT KEY,
         phone            TYPE STANDARD TABLE OF phone\_number
                               WITH NON-UNIQUE DEFAULT KEY,
       END OF employee\_struc.

The structure of the type can be determined by collecting the type group SYDES as follows:

DATA: employee TYPE employee\_struc,
      td       TYPE sydes\_desc.
DESCRIBE FIELD employee INTO td.

The following table shows a few selected columns of the type description table TD-TYPES. To make it easier to read, the names of the columns IDX\_NAME, IDX\_UERR\_TYPE, and IDX\_EDIT\_MASK have been shortened:

   |FROM| TO |BACK|NAME|UTYP|EMSK|TYPE
\---|----|----|----|----|----|----|----
01 |  2 |  7 |  0 |  0 |  2 |  0 |  v
02 |  0 |  0 |  1 |  6 |  0 |  4 |  N
03 |  8 |  9 |  1 |  7 |  5 |  0 |  u
04 | 10 | 12 |  1 |  8 |  0 |  0 |  u
05 |  0 |  0 |  1 |  9 |  0 |  0 |  P
06 | 13 | 13 |  1 | 11 |  0 |  0 |  h
07 | 17 | 17 |  1 | 12 |  0 |  0 |  h
08 |  0 |  0 |  3 | 13 |  0 |  0 |  C
09 |  0 |  0 |  3 | 14 |  0 |  0 |  C
10 |  0 |  0 |  4 | 15 |  0 |  0 |  C
11 |  0 |  0 |  4 | 16 |  0 |  0 |  N
12 |  0 |  0 |  4 | 17 |  0 |  0 |  C
13 | 14 | 16 |  6 |  0 | 18 |  0 |  u
14 |  0 |  0 | 13 | 20 |  0 |  0 |  D
15 |  0 |  0 | 13 | 21 |  0 |  0 |  T
16 |  0 |  0 | 13 | 22 |  0 |  0 |  T
17 |  0 |  0 |  7 |  0 |  0 |  0 |  N

Note that the entries in rows 6 and 7 represent internal tables (ABAP type h). In an internal table, there is always an entry for the associated row type (rows 13 and 17).
The indexes in the rows 5 to 7 refer to entries in the name table TD-NAMES. Taking, for example, row 3, the associated component name in TD-NAMES is found from row 7 (NAME) onward and the associated user type from row 5 (NAME\_STRUC) onward.
The name table TD-NAMES contains the following entries. Note that the names SALARY\_PER\_MONTH and ABSENCE\_TIME\_STRUC are stored in two parts:

   |CONTINUE|NAME                   |CONTINUE|NAME
\---|--------|--------------     ----|--------|--------------
01 |        |DESCTEST            12 |        |PHONE
02 |        |EMPLOYEE\_STRUC      13 |        |FIRST
03 |        |SBOOK-CUSTOMID      14 |        |LAST
04 |        |==ALPHA             15 |        |STREET
05 |        |NAME\_STRUC          16 |        |ZIPCODE
06 |        |ID                  17 |        |PLACE
07 |        |NAME                18 |   \*    |ABSENCE\_TIME\_ST
08 |        |ADDRESS             19 |        |RUC
09 |   \*    |SALARY\_PER\_MONT     20 |        |DAY
10 |        |H                   21 |        |FROM
11 |        |ABSENT              22 |        |TO