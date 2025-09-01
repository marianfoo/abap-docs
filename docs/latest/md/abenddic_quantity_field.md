  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Quantity%20Fields%2C%20ABENDDIC_QUANTITY_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Quantity Fields

A quantity field is a component of a DDIC structure, DDIC database table, or DDIC view used to store a quantity in a specific unit. A quantity field can have data type QUAN, DECFLOAT16, or DECFLOAT34. In case of data type QUAN, a field is automatically interpreted as quantity field and a reference to a unit key is mandatory. In case of the other data types, this reference is not mandatory, but if it is assigned, it turns the field into a quantity field.

The unit key defines the unit and the number of decimal places. It is a component of a DDIC structure, DDIC database table, or DDIC view of type UNIT and can contain a [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the DDIC database table T006.

-   [Handling in ABAP Dictionary](#abenddic-quantity-field-1-------handling-in-dynpros---@ITOC@@ABENDDIC_QUANTITY_FIELD_2)
-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Hints

-   Quantities and units are handled as specified by the data saved in the DDIC database tables T006... in the package SZME. This data can be maintained using the transaction CUNI.
-   Quantity fields in ABAP CDS are described in topic [ABAP CDS - Quantity Fields](javascript:call_link\('abencds_quantity_field.htm'\)).

Handling in ABAP Dictionary   

A data element of data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in DDIC database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), any number of decimal places can be defined. The default value is no decimal places.

A quantity field of data type DECFLOAT16 or DECFLOAT34 is handled according to its data type.

For every structure component of data type QUAN, a component of the same structure or of a different structure, DDIC database table, or DDIC view must be defined as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Hints

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type QUAN should be odd.
-   The number of decimal places for the unit defined using the unit key of type UNIT only affects the formatting of a quantity field on a dynpro. It is independent of the number given for the quantity field of type QUAN.

Handling in Dynpros   

For the display of an input/output field of type QUAN on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the DDIC database table T006. If the reference field is not found or if there is no entry in the DDIC database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the properties of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the DDIC database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Limitation: Quantity fields of data type DECFLOAT16 or DECFLOAT34 are not supported on dynpros.

Hint

A display that matches the accuracy of a quantity field is only possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs   

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers. When quantity currency fields with [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), no special handling takes place.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)). The addition UNIT of the statement WRITE *\[*TO*\]* can be used only for quantity fields of data type QUAN, not for quantity fields of any other data type.