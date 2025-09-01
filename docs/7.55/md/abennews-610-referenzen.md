  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Data References in Release 6.10

[1\. Typing using TYPE DATA](#!ABAP_MODIFICATION_1@1@)
[2\. Specifying types for CREATE](#!ABAP_MODIFICATION_2@2@)
[3\. Uppercase and lowercase in dynamically specified types](#!ABAP_MODIFICATION_3@3@)
[4\. Defining typed data references](#!ABAP_MODIFICATION_4@4@)
[5\. Casting data references](#!ABAP_MODIFICATION_5@5@)
[6\. Additional type information for ASSIGN dref->\*](#!ABAP_MODIFICATION_6@6@)
[7\. Any typing for CREATE DATA](#!ABAP_MODIFICATION_7@7@)
[8\. Dereferencing in any operand positions](#!ABAP_MODIFICATION_8@8@)

Modification 1

Typing Using TYPE DATA

TYPE DATA was previously handled like [TYPE REF TO DATA](javascript:call_link\('abaptypes_simple.htm'\)) and were therefore fully typed. Now TYPE DATA can only be used for formal parameters and field symbols; otherwise a syntax error occurs. A non-generic type can now be specified after REF TO.

Modification 2

Specifying Types for CREATE

A type no longer needs to be specified for the statement [CREATE DATA ...](javascript:call_link\('abapcreate_data.htm'\)) if the reference is fully typed. In this case, the new data object is given the type of the reference.

Modification 3

Uppercase and Lowercase in Dynamically Specified Types

In the statement [CREATE DATA ...](javascript:call_link\('abapcreate_data.htm'\)), previously only uppercase letters could be used for the field content of dynamically specified types. In Release 6.10, lowercase letters can also be used. Initially the system searches using the specified field content; if this search fails, the system searches again using uppercase letters. If this search also fails, a runtime error occurs.

Modification 4

Defining Typed Data References

In the case of the statements [TYPES](javascript:call_link\('abaptypes_simple.htm'\)) and [DATA](javascript:call_link\('abapdata_simple.htm'\)), a fixed type can now be specified for the addition REF TO.

Modification 5

Casting Data References

The introduction of typed data references enables down casts for in assignments between data reference variables. It must be expressed using a special assignment operator, ?=.

Example

DATA:
  d1 TYPE REF TO data,  "Generic
  d2 TYPE REF TO i.     "Typed
d1  = d2.
d2 ?= d1.

Modification 6

Additional Type Information for ASSIGN dref->\*

If a data reference has fixed typing, it passes on its additional attributes if it is assigned to an untyped data reference.

DATA:
  dataobj   TYPE dtel\_1,
  dataref\_1 TYPE REF TO dtel\_2,
  dataref\_2 TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE ANY.
GET REFERENCE OF dataobj TO dataref\_1.
dataref\_2 = dataref\_1.
ASSIGN dataref\_2->\* TO <fs>.

In this case, dataref\_1->\*, dataref\_2->\*, and <F> inherit the attributes of the dictionary data element DTEL\_2.

Modification 7

Any Typing for CREATE DATA

New types, such as data references and internal tables, can be constructed when data objects are created using the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)). Previously, only references to existing types were possible.

Modification 8

Dereferencing in Any Operand Positions

If a data reference variable is fully typed, it can be dereferenced in any operand position, using the dereferencing operator \->\*.

Example

DATA dref TYPE REF TO i.
...
dref->\* = dref->\* + 1.