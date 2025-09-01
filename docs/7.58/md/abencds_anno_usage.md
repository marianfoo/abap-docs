---
title: "ABAP CDS - Specifying Annotations"
description: |
  CDS entities(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm 'Glossary Entry') and CDS roles(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm 'Glossary Entry') plus CDS annotation definitions(https://help.sap.com/doc/abapdo
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_usage.htm"
abapFile: "abencds_anno_usage.htm"
keywords: ["do", "if", "try", "data", "abencds", "anno", "usage"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Specifying%20Annotations%2C%20ABENCDS_ANNO_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Specifying Annotations

[CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") and [CDS roles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") plus [CDS annotation definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") themselves can (or must) be annotated with metadata using [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry"). This is done by specifying annotations directly in the associated [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry") or in [CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The annotations of [CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") expand (or override) the annotations specified in the source code of a CDS entity.

An annotation is specified in fixed [annotation syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry"). This is then checked by the syntax check of the annotated source code. Only those annotations should be specified that are defined as a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry"). An annotation definition specifies the precise way an annotation must be specified. [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") supports the specification of valid annotations (namely annotations with an annotation definition) by using colors in the source code and code completion. The syntax check for the definition of a CDS entity in [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for CDS entities does not yet evaluate the annotation definitions. [DDLA source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and [DDLX source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") also check annotations with respect to their annotation definitions.

-   [CDS annotation syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm)
-   [CDS metadata extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_meta_data_extensions.htm)
-   [Scopes for annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm)

Hints

-   [CDS annotation definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") can currently only be made by SAP, which means that only [SAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_annotation_glosry.htm "Glossary Entry") should currently be specified in [CDS source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_source_code_glosry.htm "Glossary Entry").
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.

Continue
[CDS DDL - Annotation Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm)
[ABAP CDS - Metadata Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_meta_data_extensions.htm)
[ABAP CDS - Scopes for Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm)