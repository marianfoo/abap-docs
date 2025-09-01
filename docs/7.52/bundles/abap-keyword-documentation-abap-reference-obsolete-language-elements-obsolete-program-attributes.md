# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Program Attributes

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm)
- [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm)
- [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.477Z

---

### abenprogram_attributes_obsolete.htm

> **📖 Official SAP Documentation**: [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Program Attributes

-   [Obsolete Disabling of the Unicode Check](javascript:call_link\('abennon_unicode_obsolete.htm'\))

-   [Obsolete Disabling of Fixed Point Arithmetic](javascript:call_link\('abennon_fixed_point_obsolete.htm'\))

Note

The [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) in the Open SQL syntax check demand these program attributes are not switched off.

Continue
[Obsolete Disabling of the Unicode Check](javascript:call_link\('abennon_unicode_obsolete.htm'\))
[Obsolete Disabling of Fixed Point Arithmetic](javascript:call_link\('abennon_fixed_point_obsolete.htm'\))



**📖 Source**: [abenprogram_attributes_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm)

### abennon_unicode_obsolete.htm

> **📖 Official SAP Documentation**: [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Attributes](javascript:call_link\('abenprogram_attributes_obsolete.htm'\)) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) [standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") with enabled [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") is configured by default.

-   Programs with the language version [standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") work in both [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and non-Unicode systems.

-   Programs with the language version [obsolete ABAP (non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") only work in non-Unicode systems.

In the current [SAP NetWeaver](javascript:call_link\('abensap_netweaver_glosry.htm'\) "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [obsolete ABAP (non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be reset to [obsolete ABAP (non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry"). Higher [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline")



**📖 Source**: [abennon_unicode_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm)

### abennon_fixed_point_obsolete.htm

> **📖 Official SAP Documentation**: [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abennon_fixed_point_obsolete.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Attributes](javascript:call_link\('abenprogram_attributes_obsolete.htm'\)) → 

Obsolete Disabling of Fixed Point Arithmetic

The [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is set by default when a program is created. This program attribute cannot be undone.

The option to modify this program attribute is provided only for reasons of compatibility. It is generally only needed to enable fixed point arithmetic in programs where it is not yet enabled. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type p) is only respected for output in a classic dynpro, in assignments to fields of the types c and string, or for formatting using WRITE *\[*TO*\]*. The position is not respected for calculations.

Programming Guideline

[Program Attributes](javascript:call_link\('abenprogram_attribute_guidl.htm'\) "Guideline")
