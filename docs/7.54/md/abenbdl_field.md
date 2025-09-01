  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR, field

Syntax

... field(read only *|* mandatory) field*\[*, field, ...*\]*;

Effect

Some fields of a CDS entity can be specified to which certain access restrictions apply:

-   field(read only) FieldName;
    The field FieldName cannot be modified by the operations create and update.

-   field(mandatory) FieldName;
    The field FieldName must be given a value in create operations. In update operations, it must not be given the null value.

Note

Commas can be used to classify multiple fields, Field1, Field2, Field3, ... in the same way:

field(read only) Field1, Field2, Field3;

field(mandatory) Field4, Field5;

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
lock master
{
  field (read only) Travel\_ID;
  field (mandatory) Agency\_ID, Customer\_ID, Begin\_Date, End\_Date;
  create;
  update;
  delete;
}