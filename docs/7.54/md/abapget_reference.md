  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Reference Variables](javascript:call_link\('abenset_references.htm'\)) → 

GET REFERENCE

[Quick Reference](javascript:call_link\('abapget_reference_shortref.htm'\))

Syntax

GET REFERENCE OF dobj INTO dref.

Effect

This statement sets the [reference](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") in the reference variable dref in a way that makes it point to the data object dobj. The following can be specified for dref:

-   An existing [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry"). The static type of the data reference variable must be more general than or the same as the data type dobj, according to the [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)).
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). This declares a data reference variable whose static type is the data type of dobj. The data type of dobj must be known statically as a full type or as the generic type data. Field symbols and formal parameters with other generic types, in particular any, are not possible.
    

The data object is specified directly and in accordance with the rules described in the section [Reading Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\)). If offsets/lengths ([+off(len)](javascript:call_link\('abenoffset_length.htm'\))) are specified, the data type dobj here cannot be string or xstring.

Notes

-   Alongside the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) and the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)), the statement GET REFERENCE is the only option available to statements for internal tables to create [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry"). Stack references can become invalid if the referenced data object is deleted.
    
-   When applied to data objects in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") GET REFERENCE creates memory-retaining [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").
    
-   The content of two reference variables filled with GET REFERENCE is only the same if the remaining administration information is the same, apart from the referenced data objects. For example, a reference that is retrieved directly by specifying the data object is not the same as a reference that is retrieved by specifying a field symbol if this has a different data type due to a [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry").
    
-   When an internal table has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), a data reference variable can only point to this or the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry"). In the statement GET REFERENCE, the name of an internal table with a header line addresses the header line. To address the table body, \[\] must be appended to the name in the usual way. A dereferenced data reference to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
    
-   If references are set using GET REFERENCE, permission to access the data object in question is only checked at the position of the statement. After that, the references can be passed on to any destination and the associated data objects can be accessed from any position using the references. To prevent access to private and read-only attributes using references outside classes, do not publish references to these attributes externally. A constant or read-only input parameter, however, can never be made modifiable by passing its reference.
    
-   A data reference retrieved using GET REFERENCE that references a data object in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry") can also be stored in a closed [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). The restrictions described for the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) must be respected.
    
-   The [reference operator](javascript:call_link\('abenreference_operator_glosry.htm'\) "Glossary Entry") [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) works like the statement GET REFERENCE and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
    

Example

Creates data references to the individual characters of a data object text and saves them in an internal table. Direct dereferencing at an operand position is possible because the data reference is fully typed. After the output, an alternative implementation with an [iteration expression](javascript:call_link\('abenfor_conditional.htm'\)) and the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) is shown that has the same result.

TYPES c1 TYPE c LENGTH 1.
DATA: dref         TYPE REF TO c1,
      dref\_tab     LIKE TABLE OF dref WITH EMPTY KEY,
      dref\_tab\_new LIKE dref\_tab.
DATA: text TYPE c LENGTH 10 VALUE '0123456789',
      off  TYPE i.
DO 10 TIMES.
  off = sy-index - 1.
  GET REFERENCE OF text+off(1) INTO dref.
  APPEND dref TO dref\_tab.
ENDDO.
LOOP AT dref\_tab INTO dref.
  cl\_demo\_output=>write( |{ dref->\* }| ).
ENDLOOP.
cl\_demo\_output=>display( ).
dref\_tab\_new = VALUE #(
  FOR j = 0 UNTIL j > 9 ( REF #( text+j(1) ) ) ).
ASSERT dref\_tab\_new = dref\_tab.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The data object specified after INTO is not a reference variable.
    Runtime error: GET\_REF\_REFERENCE\_EXPECTED
    
-   Cause: GET REFERENCE is not permitted for a substring.
    Runtime error: ILLEGAL\_SUBSTRING\_PARAMETER