---
title: "Syntax"
description: |
  <tt:namespace name='prefix'name=''/> Effect The ST statement tt.namespace declares an explicit namespace. By default, in serializations, namespace declarations are written to the resulting XML data only if the associated namespace prefix is used as part of the name in a literal XML element or att
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_namespace.htm"
abapFile: "abenst_tt_namespace.htm"
keywords: ["insert", "do", "if", "data", "abenst", "namespace"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Anamespace%2C%20Namespaces%2C%20ABENST_TT_NAMESPACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:namespace, Namespaces

Syntax

<tt:namespace name="prefix"*|*name=""/>

Effect

The ST statement tt.namespace declares an explicit namespace.

By default, in serializations, namespace declarations are written to the resulting XML data only if the associated namespace prefix is used as part of the name in a literal XML element or attribute or in a non-literal attribute. A namespace declaration is written into the exact element in which it is needed. Namespace declarations whose prefix is not used explicitly are ignored in serializations. In deserializations, the binding of the namespace prefix to the correct URI is checked.

For XML elements of the resulting XML data in which a namespace declaration is required even though the relevant namespace prefix is not part of a name but used, for example, as content of an attribute, this can be forced in serializations by using the statement tt:namespace. The statement can be specified one or more times within a literal XML element before its subelements. Each statement declares a namespace for the current XML element with the namespace prefix specified after the attribute name. The namespace prefix must be known in the current context, that is, it must have been defined in a surrounding XML element with xmlns:prefix="uri".

Serializing Namespace Declarations   

If a surrounding element does not yet contain a declaration of the namespace, the statement tt:namespace name="prefix" inserts the definition xmlns:prefix="uri" into the definition of the literal XML element and thus applies it to all its subelements. The statement tt:namespace name="" inserts the definition xmlns="uri" if defined in a surrounding XML element. Within the XML element, no other declarations of this namespace are created. In particular, other tt:namespace statements within the same XML element are ignored.

Deserializing Namespace Declarations   

In deserializations, the statement tt:namespace is ignored.

Example

The ST program DEMO\_ST\_NAMESPACE1 below shows how namespaces are handled by default:

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates"
  xmlns:abc="www.abc.com" xmlns:xyz="www.xyz.com">
  <tt:root name="ROOT"/>
  <tt:template>
    <X0>
      <context1 xmlns:abc="www.abc.com" attr="abc:uvw">
        <X>...</X>
      </context1>
      <context2>
        <abc:X xyz:attr="xyz">...</abc:X>
        <xyz:Y>...</xyz:Y>
      </context2>
    </X0>
  </tt:template>
</tt:transform>

The definition of the namespace with the prefix abc in element context1 is not needed in standard XML and is omitted in serializations. In the subelements abc:X and xyz:Y of context2, the declaration of namespaces is needed and inserted in serializations. The result of a serialization is as follows:

<X0>
  <context1 attr="abc:uvw">
    <X>
     ...
    </X>
  </context1>
  <context2>
    <abc:X
      xmlns:abc="www.abc.com"
      xmlns:xyz="www.xyz.com" xyz:attr="xyz">
      ...
    </abc:X>
    <xyz:Y xmlns:xyz="www.xyz.com">
      ...
    </xyz:Y>
  </context2>
</X0>

The ST program DEMO\_ST\_NAMESPACE2 below contains explicit namespace declarations:

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates"
  xmlns:abc="www.abc.com"
  xmlns:xyz="www.xyz.com">
  <tt:root name="ROOT"/>
  <tt:template>
    <X0>
      <context1 attr="abc:uvw">
        <tt:namespace name="abc" />
        <X>...</X>
      </context1>
      <context2>
        <tt:namespace name="abc" />
        <tt:namespace name="xyz" />
        <abc:X xyz:attr="xyz">...</abc:X>
        <xyz:Y>...</xyz:Y>
      </context2>
    </X0>
  </tt:template>
</tt:transform>

The tt:namespace statements are used to explicitly insert namespace declarations for the prefixes abc and xyz into the elements context1 and context2. Now the content of attribute attr of context1 can be evaluated with specific reference to the namespace and the declaration of namespaces is no longer needed in the elements abc:X and xyz:Y of context2.