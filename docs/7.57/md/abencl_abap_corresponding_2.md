---
title: "Hints"
description: |
  -   The methods CREATE_USING and EXECUTE_USING of the system class CL_ABAP_CORRESPONDING implement an assignment similar to the statement dst = CORRESPONDING(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm) #( dst FROM lookup_tab KEY key_name ...
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_2.htm"
abapFile: "abencl_abap_corresponding_2.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abencl", "abap", "corresponding"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) →  [CL\_ABAP\_CORRESPONDING, System Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_ABAP_CORRESPONDING, Lookup Table, ABENCL_ABAP_CORRESPONDING_2, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_ABAP\_CORRESPONDING, Lookup Table

The methods CREATE\_USING and EXECUTE\_USING of the system class CL\_ABAP\_CORRESPONDING can be used to assign components between internal tables with a dynamically specified mapping rule. The source table acts as a lookup table.

The factory method CREATE\_USING is used to create a mapping object:

DATA(mapper) = cl\_abap\_corresponding=>create\_using( destination = itab
                                                    using       = lookup\_tab
                                                    mapping     = mapping\_tab ).

Internal tables itab and lookup\_table of the table types to which the assignment is to be made must be passed to the parameters destination and using. An internal table of the type CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE that contains the mapping rule, must be passed to the parameter mapping. The mapping table has the same components as in the methods for [simple assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_1.htm) with the following special semantics:

-   KIND
    
    Mapping type. Additional possible values are:
    
    -   CL\_ABAP\_CORRESPONDING=>USING\_KEY (4), the table key of the lookup table used for the evaluation is specified in the component SRCNAME in this line. The table must contain such a line.
    -   CL\_ABAP\_CORRESPONDING=>MAPPING\_USING\_COMPONENT (5), the name of a column of the lookup table in SRCNAME is linked with the name of a column of the target table in DSTNAME in a line like this. All key fields of the table key used must be covered by a line like this.
    
    The mapping types for [simple assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_1.htm) can also be used and have the same semantics as described here.
    

The method EXECUTE\_USING of a mapping object can be used to perform any number of assignments between tables lookup\_src and dst whose data type matches the source type or target type lookup\_tab or itab specified when the object was created:

mapper->execute\_using( EXPORTING using       = lookup\_src
                       CHANGING  destination = dst ).

For each line in dst, a line is searched for in the lookup table lookup\_src that matches this line in accordance with the relationship defined using the mapping type CL\_ABAP\_CORRESPONDING=>MAPPING\_USING\_COMPONENT in the mapping table. If the key is not unique, the first line found is used. If no line like this is found, the line from dst remains unchanged. If a line like this is found in lookup\_src, it is assigned to the line from dst in accordance with the rules of [MOVE-CORRESPONDING for structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) using the addition EXPANDING NESTED TABLES, with the following exception. The components used for the search are not assigned by default. The lines in the mapping table with mapping types for [simple assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_1.htm) can be used to override the default assignment of identically named components and the default exclusion of the components used for the search. It is not possible to specify the same table for dst and lookup\_src, otherwise the runtime error CORRESPONDING\_SELF occurs.

Hints

-   The methods CREATE\_USING and EXECUTE\_USING of the system class CL\_ABAP\_CORRESPONDING implement an assignment similar to the statement
    
    dst = [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm) #( dst FROM lookup\_tab KEY key\_name ... ).
    
    However, the columns used for comparison between the target table and lookup table and the [mapping rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_mapping.htm) are specified dynamically as the content of a special internal table.
    
-   In the mapping table, the columns of the target table dst are part of the column DSTNAME, regardless of the mapping type, and the columns of the lookup table are part of the column SRCNAME. In the [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm) operator, however, the arrangement of the operands after USING is different from the arrangement after MAPPING.

Example

The example shows the implementation of the example of component operator [CORRESPONDING with lookup table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_using.htm) to class CL\_ABAP\_CORRESPONDING.

TYPES:
  BEGIN OF line,
    value   TYPE i,
    comment TYPE string,
  END OF line,
  itab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY,
  itab2 TYPE HASHED TABLE OF line WITH UNIQUE KEY value.
DATA(itab1) = VALUE itab1( FOR i = 1 UNTIL i >= 10 ( value = i ) ).
FINAL(itab2) = VALUE itab2( ( value = 2 comment = \`...\` )
                           ( value = 3 comment = \`...\` )
                           ( value = 5 comment = \`...\` )
                           ( value = 8 comment = \`...\` ) ).
FINAL(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table(
  ( level = 0 kind = 4 srcname = 'PRIMARY\_KEY' )
  ( level = 0 kind = 5 srcname = 'VALUE' dstname = 'VALUE' ) ).
cl\_abap\_corresponding=>create\_using(
     destination       = itab1
     using             = itab2
     mapping           = mapping\_tab
     )->execute\_using( EXPORTING using       = itab2
                       CHANGING  destination = itab1 ).
cl\_demo\_output=>display( itab1 ).

Executable Example

[CL\_ABAP\_CORRESPONDING with Lookup Table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corr_lookup_abexa.htm)