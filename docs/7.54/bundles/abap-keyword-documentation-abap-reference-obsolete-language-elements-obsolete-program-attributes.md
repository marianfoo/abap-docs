# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Program Attributes

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attributes_obsolete.htm)
- [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_unicode_obsolete.htm)
- [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_fixed_point_obsolete.htm)
- [abenabap_versions_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_versions_obsolete.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.955Z

---

### abenprogram_attributes_obsolete.htm

> **📖 Official SAP Documentation**: [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attributes_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Program Attributes

-   [Obsolete Disabling of the Unicode Check](javascript:call_link\('abennon_unicode_obsolete.htm'\))

-   [Obsolete Disabling of Fixed Point Arithmetic](javascript:call_link\('abennon_fixed_point_obsolete.htm'\))

-   [Obsolete ABAP Language Versions](javascript:call_link\('abenabap_versions_obsolete.htm'\))

Note

The [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) in the ABAP SQL syntax check demand these program attributes are not switched off.

Continue
[Obsolete Disabling of the Unicode Check](javascript:call_link\('abennon_unicode_obsolete.htm'\))
[Obsolete Disabling of Fixed Point Arithmetic](javascript:call_link\('abennon_fixed_point_obsolete.htm'\))
[Obsolete ABAP Language Versions](javascript:call_link\('abenabap_versions_obsolete.htm'\))



**📖 Source**: [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attributes_obsolete.htm)

### abennon_unicode_obsolete.htm

> **📖 Official SAP Documentation**: [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_unicode_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Attributes](javascript:call_link\('abenprogram_attributes_obsolete.htm'\)) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") with enabled [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") is configured by default.

-   Programs with the language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") work in both [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and non-Unicode systems.

-   Programs with the [obsolete](javascript:call_link\('abenabap_versions_obsolete.htm'\)) language version [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") only work in non-Unicode systems.

In the current [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be set back to [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). Higher [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline")



**📖 Source**: [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_unicode_obsolete.htm)

### abennon_fixed_point_obsolete.htm

> **📖 Official SAP Documentation**: [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_fixed_point_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Attributes](javascript:call_link\('abenprogram_attributes_obsolete.htm'\)) → 

Obsolete Disabling of Fixed Point Arithmetic

The [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is set by default when a program is created. This program attribute cannot be undone.

The option to modify this program attribute is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline")



**📖 Source**: [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_fixed_point_obsolete.htm)

### abenabap_versions_obsolete.htm

> **📖 Official SAP Documentation**: [abenabap_versions_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_versions_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap_versions_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_versions_obsolete.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Attributes](javascript:call_link\('abenprogram_attributes_obsolete.htm'\)) → 

Obsolete ABAP Language Versions

The following [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") are obsolete.

Language Version

Meaning

Version ID

[Static ABAP with restricted object use](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") apply, with restrictions on access to external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). Dynamically specified data and statements for dynamic creation of programs are forbidden here to make sure that static checks can be carried out. The corresponding language elements are hidden in the documentation for static ABAP with restricted object use.

  3

[Standard ABAP with restricted object use](javascript:call_link\('abenstandard_abap_restr_obj_glosry.htm'\) "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") apply, with restrictions on access to external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). Dynamic language elements are not forbidden in this version.

  4

[Non-Unicode ABAP](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry")

The version ID of a program of this type is initial. No [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") are performed in programs of this type.

  -

Only the versions specified under [ABAP language versions](javascript:call_link\('abenabap_versions.htm'\)) should be used. The ABAP language versions above are obsolete for the following reasons:

-   There are no application scenarios for the the following versions:

-   static ABAP with restricted object use,

-   standard ABAP with restricted object use.

The associated lists of permitted repository objects have been frozen and no more objects can be added.

-   Non-Unicode ABAP is fully [obsolete](javascript:call_link\('abennon_unicode_obsolete.htm'\)) and is not supported in this release.
