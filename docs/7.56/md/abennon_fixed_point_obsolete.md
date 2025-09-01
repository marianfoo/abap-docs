  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of Fixed Point Arithmetic

The [program attribute](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") [fixed point arithmetic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is set by default when a program is created. This program attribute cannot be undone.

The option to modify this program attribute is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, for assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_attribute_guidl.htm "Guideline")