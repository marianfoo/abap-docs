  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\)) → 

Enhancement Category of Structures

ABAP Dictionary structures and database tables that are delivered by SAP can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry"). These types of changes cause problems if the enhancements change the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry").

For this reason, structures and database tables are given a classification, which make it possible to recognize and handle problems related to structure enhancements. This classification is used in the program check to create a warning at all points where the program works with structures, and where later structure enhancements could cause syntax errors or changes in program behavior. When a structure or a database table is defined in ABAP Dictionary, the enhancement categories displayed in the following table can be used as a classification.

Level

Category

Meaning

1

Unclassified

The structure does not have an enhancement category.

2

Cannot be enhanced

The structure must not be enhanced.

3

Can be enhanced and character-like

All structure components and their enhancements must be character-like and flat.

4

Can be enhanced and character-like or numeric

All structure components and their enhancements must be flat.

5

Can be enhanced in any way

All structure components and their enhancements can have any data type.

The warnings displayed after the program check are classified into three levels from the following table, depending on the consequences of the permitted structure enhancements.

Level

Type of Check

Meaning

A

Syntax check

An enhancement that exhausts in full the enhancement category of the structure in question produces a syntax error.

B

Extended check

Permitted enhancements can produce syntax errors, but not always.

C

Extended check

Permitted enhancements cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in ABAP Dictionary is defined only with [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") components but is classified as Can be enhanced in any way, the following program section produces a warning in the syntax check. If the structure were to be enhanced by a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, this is why either the structure ddic\_struc must be classified in ABAP Dictionary as Can be enhanced and character-like or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).