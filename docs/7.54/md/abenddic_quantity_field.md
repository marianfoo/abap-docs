  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_special.htm) → 

Quantity Fields

A quantity field is a component of a structure, database table, or view of type [QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) defined in ABAP Dictionary and used to record a quantity in a specific unit. A quantity field must be associated with a unit key of a structure, database table, or view that defines the unit and the number of decimal places. A unit key is a component of a structure, database table, or view of type UNIT defined in ABAP Dictionary and can contain a [unit ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006.

-   [Handling in ABAP Dictionary](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_1)

-   [Handling in Dynpros](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm).