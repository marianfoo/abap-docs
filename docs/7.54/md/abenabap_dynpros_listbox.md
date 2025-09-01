  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) → 

Dropdown List Boxes

[Dropdown list boxes](javascript:call_link\('abendropdown_listbox_glosry.htm'\) "Glossary Entry"), which contain a predefined set of proposal values, can be defined for input/output fields on dynpros. It is not possible to enter a value in this type of input field and a value must be chosen from the proposal list instead. If a dropdown list box is associated with a field, the input help key (F4) cannot be used.

A dropdown list box is a single-column list of text fields with a maximum length of 80 characters. Internally, each text field is associated with a key of up to 40 characters. When the user selects a row, the content of the text field is entered in the input field on the screen and the content of the key is passed to the dynpro field. This means that the content and length of the screen field and dynpro field are not generally identical.

If a function code is associated with an input/output field with a dropdown list box, selecting a value triggers PAI immediately and the function code is passed to the fields sy-ucomm and the OK field. If no function code is associated, PAI must be triggered as usual using a different screen element.

If a dropdown list box is associated with an input/output field, the attribute Value List of the screen element can be used to define how the texts in the dropdown list box are created. There are two options:

-   Value list from the input help (recommended)

If the attribute Value List is empty, the text field of the dropdown list box takes the first column of the [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) associated with the screen field. This input help should have two columns. The key of the dropdown list box is filled automatically from the second column.

-   Value list from PBO modules (not recommended)

If the attribute Value List has the value "A", the value list must be filled using the function module VRM\_SET\_VALUES before the screen is sent. This is done by passing an internal table of the type VRM\_VALUES of the type group VRM to the import parameterVALUES of the function module. The row type is a structure consisting of two text fields, KEY and TEXT, with a length of 40 or 80 characters respectively. The table rows can combine values in the component KEY with any texts in the component TEXT. The associated input/output field is passed to the import parameter ID.

Executable Examples

-   [List Box with Value List from Input Help](javascript:call_link\('abendynpro_drop1_abexa.htm'\))

-   [List Box with Value List from PBO Module](javascript:call_link\('abendynpro_drop2_abexa.htm'\))