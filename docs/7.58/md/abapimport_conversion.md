  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20conversion_options%2C%20ABAPIMPORT_CONVERSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, conversion\_options

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_shortref.htm)

Syntax

... *{* *{* *{* *{**\[*ACCEPTING PADDING*\]* *\[*ACCEPTING TRUNCATION*\]**}*
        *|* *\[*IGNORING STRUCTURE BOUNDARIES*\]* *}*
        *\[*IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]**\]* *}*
    *|* *\[*IN CHAR-TO-HEX MODE*\]* *}*
    *\[*CODE PAGE INTO cp*\]*
    *\[*ENDIAN INTO endian*\]*.

Additions:

[1\. ... ACCEPTING PADDING](#!ABAP_ADDITION_1@1@)
[2\. ... ACCEPTING TRUNCATION](#!ABAP_ADDITION_2@2@)
[3\. ... IGNORING STRUCTURE BOUNDARIES](#!ABAP_ADDITION_3@3@)
[4\. ... IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*](#!ABAP_ADDITION_4@4@)
[5\. ... IN CHAR-TO-HEX MODE](#!ABAP_ADDITION_5@5@)
[6\. ... CODE PAGE INTO cp](#!ABAP_ADDITION_6@6@)
[7\. ... ENDIAN INTO endian](#!ABAP_ADDITION_7@7@)

Effect

These additions allow the reading of data stored in [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") into non-type-compliant data objects and define associated conversion rules. The following table shows which of the additions may be used during imports from the various buffers. The column headers are abbreviations for the following storage locations: [DATA BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (B), [MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (M), [SHARED MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (SM), [SHARED BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (SB), [DATABASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (DB), and [INTERNAL TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) (IT).

Conversion Addition

B

M

IT

DB

SM

SB

ACCEPTING PADDING

+

+

+

+

+

+

ACCEPTING TRUNCATION

+

+

+

+

+

+

IGNORING STRUCTURE BOUNDARIES

+

+

+

+

+

+

IGNORING CONVERSION ERRORS

+

\-

+

+

\-

\-

REPLACEMENT CHARACTER rc

+

\-

+

+

\-

\-

IN CHAR-TO-HEX MODE

+

\-

+

+

\-

\-

CODE PAGE INTO cp

+

\-

+

+

\-

\-

ENDIAN INTO endian

+

\-

+

+

\-

\-

Addition 1   

... ACCEPTING PADDING

Effect

This addition extends the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) for different data types of source field and target field dobj in the data clusters:

-   In addition to data objects of the type c, the target field can be longer than the source field for data objects of the type n, p, or x.
-   Source fields of the type
    -   b can be read into target fields of the types s, i, and int8
    -   s can be read into target fields of the type i and int8 (but negative numbers are handled incorrectly)
    -   i can be read into target fields of the type int8
-   Source fields of the type c can be exported to target fields of the type string and source fields of the type x can be exported to target fields of the type xstring.
-   The rules above also apply if the component involved is the last component of a source structure or target structure that is otherwise set up in the same way.
-   In a target structure, substructures can also have more components than the substructures of the source structure if the structure is otherwise set up in the same way. The surplus components are provided with type-dependent [initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry").

Hint

The rule that substructures in a target structure can have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary. This is the case if the structure there is marked as extendable. Therefore, this situation raises a warning from the extended program check.

Example

Without the addition ACCEPTING PADDING, the structure f1 in the data cluster could not be imported into the structure f2 since a substructure of f2 contains a surplus component.

DATA: BEGIN OF f1,
       col1 TYPE string,
       BEGIN OF sub,
         col2 TYPE decfloat16,
       END OF sub,
       col3 TYPE i,
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
          col3 TYPE xstring,
        END OF sub,
        col4 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING PADDING.

Addition 2   

... ACCEPTING TRUNCATION

Effect

This addition expands the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) for different data types of source field in the data cluster and target field dobj in the data cluster. This means that, in the case of structures that otherwise have the same type, if the source structure at the highest level has more components than the target structure in the data cluster, the surplus components are cut off. A substructure of the source structure must not have more components than the corresponding substructure in the target structure.

Example

Without the addition ACCEPTING TRUNCATION, the structure f1 in the data cluster could not be imported into the structure f2 since f2 contains fewer components.

DATA: BEGIN OF f1,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat34,
        END OF sub,
        col3 TYPE i,
        col4 TYPE xstring,
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat34,
        END OF sub,
        col3 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING TRUNCATION.

Addition 3   

... IGNORING STRUCTURE BOUNDARIES

Effect

This addition expands the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) for different data types of source field in the data cluster and target field dobj in the data cluster. In structures, this produces an insignificantly different setup, with the differences resulting from substructures or from various applied components of other structures with the statement [INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_type.htm). The components of source and target structure are all considered on one level, regardless of the setup inherited from substructures or from components applied using INCLUDE. Any [alignment gaps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalignment_gap_glosry.htm "Glossary Entry") that have resulted from substructures are irrelevant.

The addition IGNORING STRUCTURE BOUNDARIES, however, restricts the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) in such a way that once the substructures or inherited components in the target structure are resolved, a last component of type c cannot have a different length and the target structure cannot have any additional components. The addition cannot be used together with the additions ACCEPTING PADDING and ACCEPTING TRUNCATION.

Example

Without the addition IGNORING STRUCTURE BOUNDARIES, the structure f1 in the data cluster could not be imported into the structure f2 since f1 and f2 are set up differently from substructures.

DATA: BEGIN OF incl\_struc,
        cola TYPE string,
        colb TYPE i,
      END OF incl\_struc.
DATA: BEGIN OF f1.
        INCLUDE STRUCTURE incl\_struc.
DATA:   col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
          col3 TYPE decfloat34,
        END OF sub,
        col4 TYPE i,
      END OF f1.
DATA: BEGIN OF f2,
        cola TYPE string,
        colb TYPE i,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
        END OF sub,
        col3 TYPE decfloat34,
        col4 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK'
                 IGNORING STRUCTURE BOUNDARIES.

Addition 4   

... IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*

Effect

This addition suppresses an exception of the class CX\_SY\_CONVERSION\_CODEPAGE, which is raised when a conversion to another [code page](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm "Glossary Entry") is carried out during the import, and a character does not exist in the target code page.

If the addition REPLACEMENT CHARACTER is specified, each non-convertible character is replaced during the conversion by the character in rc. rc expects a character-like data object containing a single character. If the addition is not specified, the character # is used as a replacement character.

The addition IGNORING CONVERSION ERRORS also suppresses the exception if the number of bytes of an imported character-like component increases during a conversion to another code page, and therefore does no longer fit into the target object. If the addition is specified, surplus characters are cut off on the right. If the addition is not specified, only superfluous blanks are cut off on the right without raising an exception.

Addition 5   

... IN CHAR-TO-HEX MODE

Effect

This addition specifies that data that is stored in the data cluster under the data type c is assigned to target fields of the type x. The content of the source fields is not converted to the code page of the target system and are left unconverted and passed to the target fields instead. A single source field or a structure component of the type c can be assigned to a single target field or to a structure component of the type x, which has the same length in bytes. The addition is ignored by target fields of the type c.

This addition cannot be used together with the previous conversion additions.

Hint

A program using this addition cannot be transported between systems where character representations require different numbers of bytes. This addition is designed only for temporary programs, enabling them to import byte strings that were stored incorrectly in fields of the type c and to store them again in a type-compliant way.

Example

See under Addition ENDIAN INTO.

Addition 6   

... CODE PAGE INTO cp

Effect

This addition assigns the ID of the code page of the exported data to the data object cp. This object must have a character-like data type. The ID of the code page is the content of the column CPCODEPAGE of the database table TCP00.

Hint

The code page can be used to process data objects imported using CHAR-TO-HEX MODE. Conversions between code pages can be performed using system classes described in the section [Classes for Conversion of External Data Formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_conv.htm).

Example

See under Addition ENDIAN INTO.

Addition 7   

... ENDIAN INTO endian

Effect

This addition assigns the ID of the byte order of the exported data to the data object ENDIAN, which must have the data type abap\_endian from the [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP. The ID for big endian is B and L for little endian.

Hint

The byte order can be used to process data objects imported using CHAR-TO-HEX MODE, since code pages in which a character takes up more than one byte can be dependent on the byte order.

Example

The target field f2-col2 contains, after the import, the unconverted, binary content of f1-col2. The code page and the byte order in which the data is stored is in cp and en. Normally, the data in such a case is exported and imported in different programs. This example only works in a system in which a character is displayed using two bytes, since f2-col2 is double the length of f1-col2.

DATA: BEGIN OF f1,
        col1 TYPE c LENGTH 10 VALUE '1234567890',
        col2 TYPE c LENGTH 10 VALUE '1234567890',
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE c LENGTH 10,
        col2 TYPE x LENGTH 20,
      END OF f2.
DATA: cp TYPE string,
      en TYPE abap\_endian.
EXPORT para = f1 TO DATABASE demo\_indx\_blob(hk) ID 'HK'.
...
IMPORT para = f2 FROM DATABASE demo\_indx\_blob(hk) ID 'HK'
                 IN CHAR-TO-HEX MODE
                 CODE PAGE INTO cp
                 ENDIAN INTO en.