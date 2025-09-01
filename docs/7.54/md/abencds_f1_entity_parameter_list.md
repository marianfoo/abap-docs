  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... as input parameters of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") in a comma-separated list.

Currently, input parameters called pname are used only to model the interface of an abstract entity. They cannot be used as operands in the abstract CDS entity.

Note

An input parameter cannot be specified as an element in the element list.

Example

The following DDL source code shows an abstract CDS entity with input parameters:

define abstract entity demo\_cds\_abstract\_entity\_para
  with parameters
    @EndUserText.label: 'Date parameter'
    p1 : abap.dats,
    @EndUserText.label: 'Integer parameter'
    p2 : abap.int4,
    @EndUserText.label: 'Data element parameter'
    p3 : char255
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
  }

The program DEMO\_CDS\_ABSTRACT\_ENTITY\_PARA shows that the parameter annotations of the abstract CDS entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.