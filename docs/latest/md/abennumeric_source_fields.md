  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Numeric%20Source%20Fields%2C%20ABENNUMERIC_SOURCE_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Numeric Source Fields

-   [i, int8, (b, s)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm)
-   [p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_p.htm)
-   [decfloat16, decfloat34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_decfloat.htm)
-   [f](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_f.htm)

Hint

Instead of a conversion, [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry") or the statement [WRITE ... TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) can often be used with their formatting options to assign numeric values to text fields and text strings.

Example

Conversion of the integer 100 to different target types. The type-compliant formatted output is 1E+02, 0000000100, 64, 000140.

DATA num TYPE i VALUE 100.
TYPES n10 TYPE n LENGTH 10.
cl\_demo\_output=>display(
  |decfloat34:  { CONV decfloat34( num ) STYLE = SCIENTIFIC }\\n| &&
  |n LENGTH 10: { CONV n10( num ) }\\n| &&
  |xstring:     { CONV xstring( num ) }\\n| &&
  |t:           { CONV t( num ) }\\n| ).

Continue
[Source Field Type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm)
[Source Field Type p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_p.htm)
[Source Field Type decfloat16, decfloat34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_decfloat.htm)
[Source Field Type f](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_f.htm)