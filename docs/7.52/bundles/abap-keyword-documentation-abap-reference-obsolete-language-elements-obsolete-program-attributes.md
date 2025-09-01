# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Program Attributes

Included pages: 3


### abenprogram_attributes_obsolete.htm

---
title: "Obsolete Program Attributes"
description: |
  -   Obsolete Disabling of the Unicode Check(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm) -   Obsolete Disabling of Fixed Point Arithmetic(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm) Note The strict mode
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm"
abapFile: "abenprogram_attributes_obsolete.htm"
keywords: ["do", "abenprogram", "attributes", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) → 

Obsolete Program Attributes

-   [Obsolete Disabling of the Unicode Check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm)

-   [Obsolete Disabling of Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm)

Note

The [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) in the Open SQL syntax check demand these program attributes are not switched off.

Continue
[Obsolete Disabling of the Unicode Check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm)
[Obsolete Disabling of Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm)


### abennon_unicode_obsolete.htm

---
title: "Obsolete Disabling of the Unicode Check"
description: |
  When a program is created, the ABAP language version(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_versions.htm) standard ABAP (Unicode)(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm 'Glossary Entry') with enabled Unicode checks
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm"
abapFile: "abennon_unicode_obsolete.htm"
keywords: ["do", "try", "abennon", "unicode", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_versions.htm) [standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry") is configured by default.

-   Programs with the language version [standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") work in both [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.

-   Programs with the language version [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [SAP NetWeaver](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_netweaver_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be reset to [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_guidl.htm "Guideline")


### abennon_fixed_point_obsolete.htm

---
title: "Obsolete Disabling of Fixed Point Arithmetic"
description: |
  The program attribute(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm 'Glossary Entry') fixed point arithmetic(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm 'Glossary Entry') is set by default when a p
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm"
abapFile: "abennon_fixed_point_obsolete.htm"
keywords: ["do", "if", "try", "class", "types", "abennon", "fixed", "point", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of Fixed Point Arithmetic

The [program attribute](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is set by default when a program is created. This program attribute cannot be undone.

The option to modify this program attribute is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_guidl.htm "Guideline")
