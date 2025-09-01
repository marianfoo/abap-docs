  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Type%20Concept%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-TYPEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Type Concept in ABAP Release 6.10

[1\. Constants for Structures and Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. New Generic Types for Field Symbols and Formal Parameters](#!ABAP_MODIFICATION_2@2@)
[3\. Methods for Displaying Specific Type Properties](#!ABAP_MODIFICATION_3@3@)
[4\. Type Description Objects for All Friends of a Class](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Constants for Structures and Internal Tables

Constants can now be defined for structures and internal tables, which in turn contain internal tables or references and strings. Only the initial value is possible however.

Example

types:
  begin of STRUC,
    ITAB type standard table of SPFLI with non-unique key CARRID,
    MREF type ref to OBJECT,
  end of STRUC.
constants:
  CONST  type STRUC value is initial.

Modification 2   

New Generic Types for Field Symbols and Formal Parameters

The new [generic types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be used for typing field symbols and parameters in subroutines, function modules, or methods. The following table shows their variants:

Generic Type

Types

simple

clike, xsequence, numeric

clike

n, d, t, struc1, csequence

csequence

c, string

xsequence

x, xstring

numeric

i, s, b, p, f

Modification 3   

Methods for Displaying Specific Type Properties

The method GET\_PROPERTY, which provides information about specific type properties at runtime, has been added to the class CL\_ABAP\_TYPEDESCR.

Modification 4   

Type Description Objects for All Friends of a Class

The method GET\_FRIEND\_TYPES was introduced in the class CL\_ABAP\_CLASSDESCR. This can be used to query the type description objects for all friends of a class at runtime.