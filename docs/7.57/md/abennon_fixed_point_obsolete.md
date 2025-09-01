---
title: "Obsolete Disabling of Fixed Point Arithmetic"
description: |
  The program property(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm 'Glossary Entry') fixed point arithmetic(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm 'Glossary Entry') is set by default when a pro
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_fixed_point_obsolete.htm"
abapFile: "abennon_fixed_point_obsolete.htm"
keywords: ["do", "if", "try", "class", "types", "abennon", "fixed", "point", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Program Properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_properties_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Disabling of Fixed Point Arithmetic, ABENNON_FIXED_POINT_OBSOLETE, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Disabling of Fixed Point Arithmetic

The [program property](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry") [fixed point arithmetic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is set by default when a program is created. This program property cannot be undone.

The option to modify this program property is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, for assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_guidl.htm "Guideline")