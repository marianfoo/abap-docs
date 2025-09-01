# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Program Attributes

Included pages: 4


### abenprogram_attributes_obsolete.htm

---
title: "Obsolete Program Attributes"
description: |
  -   Obsolete Disabling of the Unicode Check(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm) -   Obsolete Disabling of Fixed Point Arithmetic(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_fixed_point_obsolete.htm) -   Obsolete ABAP La
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm"
abapFile: "abenprogram_attributes_obsolete.htm"
keywords: ["do", "abenprogram", "attributes", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) → 

Obsolete Program Attributes

-   [Obsolete Disabling of the Unicode Check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm)

-   [Obsolete Disabling of Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_fixed_point_obsolete.htm)

-   [Obsolete ABAP Language Versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm)

Note

The [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) in the ABAP SQL syntax check demand these program attributes are not switched off.

Continue
[Obsolete Disabling of the Unicode Check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm)
[Obsolete Disabling of Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_fixed_point_obsolete.htm)
[Obsolete ABAP Language Versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm)


### abennon_unicode_obsolete.htm

---
title: "Obsolete Disabling of the Unicode Check"
description: |
  When a program is created, the ABAP language version(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) Standard ABAP (Unicode)(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm 'Glossary Entry') with enabled Unicode checks
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm"
abapFile: "abennon_unicode_obsolete.htm"
keywords: ["do", "try", "abennon", "unicode", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_check_glosry.htm "Glossary Entry") is configured by default.

-   Programs with the language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") work in both [Unicode systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.

-   Programs with the [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm) language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be set back to [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_guidl.htm "Guideline")


### abennon_fixed_point_obsolete.htm

---
title: "Obsolete Disabling of Fixed Point Arithmetic"
description: |
  The program attribute(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm 'Glossary Entry') fixed point arithmetic(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm 'Glossary Entry') is set by default when a p
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_fixed_point_obsolete.htm"
abapFile: "abennon_fixed_point_obsolete.htm"
keywords: ["do", "if", "try", "class", "types", "abennon", "fixed", "point", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of Fixed Point Arithmetic

The [program attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is set by default when a program is created. This program attribute cannot be undone.

The option to modify this program attribute is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_guidl.htm "Guideline")


### abenabap_versions_obsolete.htm

---
title: "Obsolete ABAP Language Versions"
description: |
  The following ABAP language versions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm 'Glossary Entry') are obsolete. Language Version Meaning Version ID Static ABAP with restricted object use(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm"
abapFile: "abenabap_versions_obsolete.htm"
keywords: ["do", "if", "try", "data", "abenabap", "versions", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete ABAP Language Versions

The following [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry") are obsolete.

Language Version

Meaning

Version ID

[Static ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamically specified data and statements for dynamic creation of programs are forbidden here to make sure that static checks can be carried out. The corresponding language elements are hidden in the documentation for static ABAP with restricted object use.

  3

[Standard ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamic language elements are not forbidden in this version.

  4

[Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry")

The version ID of a program of this type is initial. No [Unicode checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_check_glosry.htm "Glossary Entry") are performed in programs of this type.

  -

Only the versions specified under [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) should be used. The ABAP language versions above are obsolete for the following reasons:

-   There are no application scenarios for the the following versions:

-   static ABAP with restricted object use,

-   standard ABAP with restricted object use.

The associated lists of permitted repository objects have been frozen and no more objects can be added.

-   Non-Unicode ABAP is fully [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm) and is not supported in this release.
