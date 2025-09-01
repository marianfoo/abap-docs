  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20TRANSFORMATION%2C%20OPTIONS%2C%20ABAPCALL_TRANSFORMATION_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL TRANSFORMATION, OPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_shortref.htm)

Syntax

... OPTIONS *\[*clear              = val*\]*
            *\[*data\_refs          = val*\]*
            *\[*initial\_components = val*\]*
            *\[*technical\_types    = val*\]*
            *\[*value\_handling     = val*\]*
            *\[*exceptions         = val*\]*
            *\[*xml\_header         = val*\]* ...

Additions:

[1\. ... clear](#!ABAP_ADDITION_1@1@)
[2\. ... data\_refs](#!ABAP_ADDITION_2@2@)
[3\. ... initial\_components](#!ABAP_ADDITION_3@3@)
[4\. ... technical\_types](#!ABAP_ADDITION_4@4@)
[5\. ... value\_handling](#!ABAP_ADDITION_5@5@)
[6\. ... exceptions](#!ABAP_ADDITION_6@6@)
[7\. ... xml\_header](#!ABAP_ADDITION_7@7@)

Effect

The addition OPTIONS enables predefined transformation options to be specified, to which specific values can be assigned to control transformations. The values must be specified in data objects val of type c or string. Each transformation option may only be specified once. Multiple values separated by blanks can be specified for a transformation option in val. If an invalid value is specified for a transformation option, a catchable exception of class CX\_SY\_TRANS\_OPTION\_ERROR is raised.

Hint

The transformations apply to XML and to [JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_glosry.htm "Glossary Entry"), if applicable.

Addition 1   

...clear

Effect

The transformation option clear controls how the ABAP target fields are initialized when deserializing from XML or JSON to ABAP.

Possible Values

Meaning

all

All target fields specified after RESULT are initialized before calling the transformation. This is the recommended setting.

supplied

In ST, the target fields which have a root node assigned to them in the ST program are initialized before calling the transformation. In XSLT, target fields for which a root node exists in the XML data are initialized before importing the nodes. Other target fields keep their value.

none

Default, the target fields specified after RESULT are not initialized, except for internal tables

Hint

Using the default setting (none) can become critical when nonexistent or empty elements are deserialized to data objects. In the case of nonexistent elements, all data objects keep their original values. In the case of empty elements, structures keep their values. In cases like this, it is advisable to use clear with the value all.

Addition 2   

... data\_refs

Effect

The transformation option data\_refs specifies the output of [data references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_glosry.htm "Glossary Entry") if the transformation is from ABAP to XML or JSON.

Possible Values

Meaning

no

Default in ST; no data references are produced.

heap

Default in XSLT and only possible there; data referenced using [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") is output as subelements of the [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") elements asx:heap or the asJSON object %heap. Data objects referenced using [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry") are not serialized.

heap-or-error

Only possible in XSLT. Like heap, but the exception CX\_REFERENCE\_NOT\_SERIALIZABLE is raised if the data to be serialized contains [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry").

heap-or-create

Only possible in XSLT. Like heap, but data objects referenced using [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry") are handled like data objects referenced using [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry").

embedded

Only possible in XSLT. Referenced data objects are output with the reference. It is not possible to deserialize XML data created in this way, since the identity of the objects is lost when serialized.

Hint

The exception CX\_REFERENCE\_NOT\_SERIALIZABLE cannot be caught by specifying it directly. It can only be caught by specifying CX\_XSLT\_SERIALIZATION\_ERROR.

Executable Example

For information about the differences between serializing to heap and embedded elements, see [Serializations to Heap or Embedded](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenserialize_ref_heap_embed_abexa.htm).

Addition 3   

... initial\_components

Effect

The transformation option initial\_components controls the output of initial structure components when transforming from ABAP to XML or JSON.

Possible Values

Meaning

include

Initial components of structures are output.

suppress\_boxed

Default; does not output initial [boxed components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboxed_component_glosry.htm "Glossary Entry") of structures; initial components of all other structures are output.

suppress

Initial components of structures are not output.

Hints

-   The suppression of initial components in serializations reduces the data volume. However, this option should be used with caution and only if there is complete control over deserializations. If the option clear is not used with the value all in serializations, any suppressed components in ABAP data objects are ignored and the target fields keep their values. Deserialization in external systems can cause problems if a suppressed component is expected.
-   The suppression of initial components also affects structure components that are typed with the domains for [XML schema data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_schema.htm). For example, a component typed with the domain XSDBOOLEAN is not created as output if it has the value abap\_false. This can also cause unwanted results.

Addition 4   

... technical\_types

Effect

The transformation option technical\_types controls the behavior if no type description can be serialized when serializing data references to [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_reference_variable.htm) or [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_reference_var.htm). This is the case when the [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the [dynamic type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_type_glosry.htm "Glossary Entry") of the data reference variable are known, but the type does not have a name (or it only has a technical name).

Possible Values

Meaning

error

Default in XSLT and only possible there. The serialization of a data reference variable with a dynamic type without a name raises the exception CX\_REFERENCE\_NOT\_SERIALIZABLE.

ignore

Only possible in XSLT. A data reference variable with a dynamic type without a name is ignored in serializations.

Hints

-   The exception CX\_REFERENCE\_NOT\_SERIALIZABLE cannot be caught by specifying it directly. It can only be caught by specifying CX\_XSLT\_SERIALIZATION\_ERROR.
-   Data types without names are [bound data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbound_data_type_glosry.htm "Glossary Entry") or data types constructed using [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry").

Addition 5   

... value\_handling

Effect

The transformation option value\_handling controls the tolerance of conversions when [mapping elementary ABAP types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_elementary.htm).

Possible Values

Meaning

default

Default setting; in serializations, an invalid value in a field of type n raises the exception CX\_SY\_CONVERSION\_NO\_NUMBER. When deserializing, the exception CX\_SY\_CONVERSION\_DATA\_LOSS is raised if target fields of the types c, n, or x are too short or the exception CX\_SY\_CONVERSION\_LOST\_DECIMALS is raised if target fields of the type p have too few decimal places.

move

Only possible in serializations. Invalid values in a field of type n are copied to XML or JSON without being changed.

accept\_data\_loss

Only possible in deserializations. If target fields of types c, n, or x are too short, surplus data for c and x is cut off on the right and surplus data for n is cut off on the left.

accept\_decimals\_loss

Only possible in deserializations. If target fields of the type p have too few decimal places, they are rounded up to the available decimal places.

reject\_illegal\_characters

Only possible in deserializations. If a value to be deserialized contains characters that do not match the encoding of the XML data or JSON data, nor the current code page of AS ABAP, an exception of the type CX\_SY\_CONVERSION\_CODEPAGE is raised. If the XML or JSON data is passed as an iXML input stream, the setting of the iXML parser overrides the encoding of the XML or JSON data.

Hints

-   The exceptions mentioned cannot be caught by specifying them directly by CALL TRANSFORMATION but are packed into CX\_TRANSFORMATION\_ERROR or its subclasses.
-   If a value is specified that is not supported in the specified direction however, the directly catchable exception CX\_SY\_TRANS\_OPTION\_ERROR is raised.

Example

If value\_handling = 'reject\_illegal\_characters' is specified, for example, an exception is raised if, in the XML header of XML data in the Latin-1 character set, encoding= "utf-8" is specified and the XML data contains characters other than those of the 7-bit ASCII character set.

Addition 6   

... exceptions

Effect

The transformation option exceptions controls the behavior of exceptions packed in CX\_TRANSFORMATION\_ERROR or its subclasses.

Possible Values

Meaning

resumable

Only in deserializations with ST. Exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR are raised as [resumable exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresumable_exception_glosry.htm "Glossary Entry") of the class. If they are handled using [CATCH BEFORE UNWIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm), the target field for which the exception was raised is given its type-dependent initial value and the attribute RESULT\_REF\_FOR\_RESUME of the exception object contains a data reference to this target field. The terminated transformation can be resumed using [RESUME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapresume.htm).

If the transformation option exceptions = 'resumable' is specified, an exception of the class CX\_ST\_DESERIALIZATION\_ERROR, that wraps an original exception behaves as if it were raised as a resumable exception.

Hints

-   When the resumable exception is handled, the target field can also be given a different value using the attribute RESULT\_REF\_FOR\_RESUME before processing is resumed using [RESUME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapresume.htm).
-   If an exception of the class CX\_ST\_DESERIALIZATION\_ERROR is raised by an exception that is itself raised in an ABAP method called during the transformation, the transformation option exceptions = 'resumable' alone is not sufficient to resume at the position where the exception was raised. To do this, the exception must be declared using [RAISING RESUMABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) and raised using [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm).

Example

Resumable raising of an exception in the deserialization of a character that does not represent a number to a numeric target field. The attribute RESULT\_REF\_FOR\_RESUME points to the target field field1, to which a negative value is assigned to demonstrate that the deserialization did not work. The deserialization is then resumed using [RESUME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapresume.htm) and field2 is given the value 2 from the XML file.

CALL TRANSFORMATION demo\_two\_values
  SOURCE field1 = 'x'
         field2 = '2'
  RESULT XML FINAL(xml).
cl\_demo\_output=>write\_xml( xml ).
DATA: field1 TYPE i,
      field2 TYPE i.
TRY.
    CALL TRANSFORMATION demo\_two\_values
      SOURCE XML xml
      RESULT field1 = field1
             field2 = field2
      OPTIONS exceptions = 'resumable'.
  CATCH BEFORE UNWIND cx\_st\_deserialization\_error INTO FINAL(exc).
    exc->result\_ref\_for\_resume->\*  = -1.
    RESUME.
ENDTRY.
cl\_demo\_output=>write( |{ field1 }, { field2 }| ).
cl\_demo\_output=>display( ).

Addition 7   

... xml\_header

Effect

The transformation option xml\_header controls the output of the XML header when transforming to XML and writing to a data object of type c, string, or to an internal table.

Possible Values

Meaning

no

No XML header is output.

without\_encoding

An XML header is output without specifying the encoding.

full

Default; an XML header is output and encoding is specified.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_TRANS\_OPTION\_ERROR

-   Cause: Invalid transformation option or invalid value.