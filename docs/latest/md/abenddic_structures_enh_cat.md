  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Technical Properties of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Enhancement%20Category%20of%20Structures%2C%20ABENDDIC_STRUCTURES_ENH_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Enhancement Category of Structures

DDIC structures and DDIC database tables that are delivered by SAP can be extended using [customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry").

These types of changes cause problems if the extensions change the [structure fragment view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry"). For this reason, DDIC structures and DDIC database tables are classified in order to be able to recognize and handle problems related to structure extensions. This classification is used in the program check to create a warning at all positions where the program works with structures, and where later structure extensions could cause syntax errors or changed program behavior. When a structure or a DDIC database table is defined in the ABAP Dictionary, the enhancement categories shown in the following table can be used as a classification.

Level

Category

Meaning

1

Not classified

The structure does not have an enhancement category.

2

Cannot be enhanced

The structure must not be extended.

3

Can be enhanced (character-like)

All structure components and their extensions must be character-like and flat.

4

Can be enhanced (character-like or numeric)

All structure components and their extensions must be flat.

5

Can be enhanced (deep)

All structure components and their extensions can have any data type.

The warnings from the program check are classified into three levels, depending on the effects of the allowed structure extensions:

Level

Type of Check

Meaning

A

Syntax check

An extension that completely exhausts the enhancement category of the affected structure produces a syntax error.

B

Extended check

Permitted extensions can produce syntax errors, but not always.

C

Extended check

Permitted extensions cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in the ABAP Dictionary is defined only with [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") components but is classified as Can be enhanced (deep), the following program section produces a warning in the syntax check. If the structure were to be extended by a [deep](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_glosry.htm "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, therefore either the structure ddic\_struc must be classified in the ABAP Dictionary as Can be enhanced (character-like) or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).