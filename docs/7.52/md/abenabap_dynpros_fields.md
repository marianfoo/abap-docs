---
title: "Dynpro Fields"
description: |
  The dynpro flow logic(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm 'Glossary Entry') does not contain any data declarations. With the exception of the OK field(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenok_field_glosry.htm 'Gloss
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_fields.htm"
abapFile: "abenabap_dynpros_fields.htm"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "try", "data", "types", "internal-table", "abenabap", "dynpros", "fields"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) → 

Dynpro Fields

The [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") does not contain any data declarations. With the exception of the [OK field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenok_field_glosry.htm "Glossary Entry") created when the [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") itself is created, all other data objects of a dynpro (dynpro fields) created when the screen elements are defined in Layout Editor are assigned to the latter. The technical attributes length and data type of a dynpro field are determined by the element attributes defLg and Format. The data types of dynpro fields are determined either by reference to [built-in data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) from ABAP Dictionary (except CLNT and FLTP) or by reference to global fields of the ABAP program. In Layout Editor, it is possible to apply fields from ABAP Dictionary or the ABAP program, in which case name, length and data type of the dynpro fields are automatically defined in a matching way. All elementary data types except [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") are possible.

After [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") and before the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") is sent, there is a data transport of global data objects for the respective ABAP program to dynpro fields of the same name. After a user action on the screen, and before or during [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") editing, the data transport takes place in the reverse order.

At PBO time, all dynpro fields are transported at the end of PBO processing, with the exception of fields that are defined in table controls or in [step loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry"). The latter are processed in loops in the flow logic and transported from the ABAP program to the dynpro after each loop execution. At PAI time, first the content of all dynpro fields that do not belong to any [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or step loop and are not specified in any [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) statement are transported into the fields with the same name in the ABAP program. The contents of the fields of a table control or step loop are transported to the ABAP program row by row or group by group at the beginning of the respective loop run. The fields that are specified in the FIELD statements of the dynpro flow logic are transported upon execution of the corresponding FIELD statement.

Input and output fields must have a unique name (element attribute Name). Pure display elements such as text fields or frames are not associated with dynpro fields and do not necessarily need a unique name. When you create input and output fields by using fields from ABAP Dictionary, the system usually also creates field labels using texts from the dictionary. The default name for these text fields is the same name as the dynpro fields of the input and output fields.

Apart from the dynpro fields defined in Screen Painter, a dynpro also knows the [system fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_field_glosry.htm "Glossary Entry") of the ABAP program. In contrast to the program, these system fields are exclusively addressed as syst-name.

Notes

-   When dynpro fields are defined with reference to [flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") in ABAP Dictionary, the global data objects with the same name of the ABAP program must be declared with the statement [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) as [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). Otherwise, there will be no data transport.

-   The attributes of dynpro fields that have not been created by copying from the program or ABAP Dictionary must be set in Screen Painter. In particular, the name of the [OK field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenok_field_glosry.htm "Glossary Entry") must be determined for every dynpro, so that the dynpro field will actually be analyzed by the runtime environment.

-   When dynpro fields with character-like dictionary type are passed, lowercase letters are transformed to uppercase letters by default. This behavior can be overridden in Screen Painter. Furthermore, [lowercase letters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_domains_sema.htm) can be preserved for data elements in the semantic attributes of a domain.

-   When dynpro fields are received from input fields on the screen, input fields are templates that expect a certain format depending on the data type of the underlying dynpro field. When passed to the dynpro field, the input is converted to a value of the appropriate type. This also means that some characters function as special characters by default.

-   The "!" character in the initial position of an input field on the screen deletes all characters in the field before the data transport.

-   The "=" character in the initial position of an input field on the screen initiates a search using [search helps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_help_glosry.htm "Glossary Entry").

-   If an input field contains only blanks and "\_" characters, the latter are transported as blanks.

To deactivate the template and also the modifying effect of special characters, the attribute Without Template can be activated in Screen Painter. However, the template cannot be deactivated for [selection screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry").

-   If the type of the dynpro field is a numeric type defined in ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the screen. This setting is only possible for [domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendomain_glosry.htm "Glossary Entry") and not for specifying a built-in type directly for [data elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_element_glosry.htm "Glossary Entry") or structure components. If a negative number is enters in an input field, although the property is not set, the number is returned with an error message. If the associated ABAP data object when the dynpro is called contains a negative number, a non-handleable exception is raised.

-   On the screen, the content of dynpro fields is displayed as character-like. This means that the displayed value may differ from the internal representation. This applies in particular for the display of initial values. On the screen, all initial fields apart from those of type STRING or SSTRING are filled with blanks, while internally they contain a type-dependent initial value. Initial fields of type STRING and SSTRING are empty on the screen, which means that the cursor cannot be moved within the output length.

-   To enable explicit data transports between an ABAP program and dynpro fields, function modules such as DYNP\_UPDATE\_FIELDS are used.

-   ABAP fields of types string or xstring can be bound to dynpro fields of the same name, just like fields of fixed length. However, it should be noted that there are no dynpro fields of variable length. The length of a dynpro field is always defined in Screen Painter by the element attribute defLg. In data transports between strings in the ABAP program and dynpro fields of the same names, dynpro fields behave like target or source fields of fixed length, independent of their data type, and the respective [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) apply, especially the following:

-   If, during the transport of a character string or byte string to a dynpro field, the string contains more characters than the length of the dynpro field, any surplus characters or bytes are cut off. Since a dynpro field may not exceed 132 characters of length, only up to 132 characters or bytes of a character string or byte string may be transported to the dynpro.

-   When transporting a character-like dynpro field to the ABAP program, trailing blanks are ignored.

These restrictions apply to the transport to and from normal input/output fields as well as to fields in table controls without an assigned internal table and to the use of dropdown boxes.

-   For special handling of [decimal floating point numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry"), refer to [Decimal Floating Point Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm).

-   For special handling of fields of the type CURR, refer to [Currency Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm).

-   For special handling of fields of the type QUAN, refer to [Quantity Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm).

Continue
[Screen Fields - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_abexas.htm)