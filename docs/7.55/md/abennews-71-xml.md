  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

XML Binding in Release 7.0, EhP2

In Release 7.0, EhP2 the interface between ABAP and XML has been enhanced as follows:

[1\. Access to ABAP Objects from simple transformations](#!ABAP_MODIFICATION_1@1@)
[2\. Mapping of XML schema data types](#!ABAP_MODIFICATION_2@2@)
[3\. Lengths specified in simple transformations](#!ABAP_MODIFICATION_3@3@)
[4\. Validation of values in simple transformations](#!ABAP_MODIFICATION_4@4@)
[5\. New values for transformation option value\_handling](#!ABAP_MODIFICATION_5@5@)
[6\. New values for transformation option data\_refs](#!ABAP_MODIFICATION_6@6@)
[7\. New value for transformation option initial\_components](#!ABAP_MODIFICATION_7@7@)
[8\. New transformation option technical\_types](#!ABAP_MODIFICATION_8@8@)
[9\. New transformation option clear](#!ABAP_MODIFICATION_9@9@)

Modification 1

Access to ABAP Objects from Simple Transformations

The following new ST statements can be used to call methods of global classes and create objects of these classes in ST programs:

-   tt:call-method calls static methods or instance methods.

-   tt:create-object creates an instance of a global class.

For addressing objects, a new addition tt:ref-type of the statements tt:parameter and tt:variable has been introduced that makes it possible to create parameters and variables from ST programs explicitly as reference variables. Another new command tt:cast also enables a [Down Cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") of reference variables in ST programs.

See the [ST Command Overview](javascript:call_link\('abenst_statements.htm'\)).

Modification 2

Mapping of XML Schema Data Types

Previously, [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") allowed only mappings of the elementary [built-in ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry") to XML schema data types and back. But this did not cover all XML schema data types. Special [domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") named XSD... have been introduced that allow [mapping of further XML schema data types](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)).

Hints

-   This change was introduced in Release 7.0, SP14.

-   The domain XSDQNAME is available from Release 7.0, EhP1.
    

Modification 3

Lengths Specified in Simple Transformations

In the ST statements tt:value, tt:write and tt:read can be used to make length specifications in order to provide a minimum length for serialization of character and type strings and a maximum length for deserialization.

Modification 4

Validation of Values in Simple Transformations

An XML schema type and further restrictions can now be specified in the ST statements tt:value, tt:write, and tt:read, to validate a value with respect to a value range.

Modification 5

New Values for Transformation Option value\_handling

The new values "accept\_decimal\_loss" and "reject\_illegal\_characters" can be selected for the transformation option [value\_handling](javascript:call_link\('abapcall_transformation_options.htm'\)) of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Modification 6

New Values for Transformation Option data\_refs

The new values heap-or-error and heap-or-create can be selected for the transformation option [data\_refs](javascript:call_link\('abapcall_transformation_options.htm'\)) of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), to control the handling of [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry").

Hint

This change was transported back as far as Release 6.20 (in Release 7.0, from SP6).

Modification 7

New Value for Transformation Option initial\_components

The new value suppress\_boxed can be selected for the transformation option [initial\_components](javascript:call_link\('abapcall_transformation_options.htm'\)) of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), to control the handling of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). The new value is also the new default setting.

Modification 8

New Transformation Option technical\_types

error or ignore can be selected for the new transformation option [technical\_types](javascript:call_link\('abapcall_transformation_options.htm'\)) of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), to control the handling of data reference variables with unknown dynamic types.

Hint

This change was transported back as far as Release 6.20 (in Release 7.0, from SP6).

Modification 9

New Transformation Option clear

all, supplied, or none can be selected for the new transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), to control the initialization of the ABAP target fields in deserializations.