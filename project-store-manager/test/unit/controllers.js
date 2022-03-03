const { expect } = require('chai');
const sinon = require('sinon');
const { ProductsController } = require('../../controllers/ProductsController');
const { ProductsService } = require('../../services/ProductsService');

describe('Testa o Controller', () => {
  describe('Cria o produto', () => {
    describe('Quando o payload informado é válido', () => {
      describe('quando é inserido com sucesso', () => {
        const response = {};
        const request = {};
        const ID_EXAMPLE = 1

        beforeEach(() => {
          request.body = {
            name: 'Example Product',
            quantity: 1,
          };

          sinon.stub(ProductsService, 'register').returns({ id: ID_EXAMPLE })

          response.status = sinon.stub()
            .returns(response);
          response.send = sinon.stub()
            .returns();
          response.json = sinon.stub().returns(JSON.stringify({
            name: 'Example Product',
            quantity: 1,
          }))
        })

        afterEach(() => {
          ProductsService.register.restore();
        })

        it('é chamado o status com o código 201', async () => {
          await ProductsController.register(request, response);

          expect(response.status.calledWith(201)).to.be.equal(true);
        });

      })
    })
  })

  describe('Pega todos os produtos cadastrados', () => {
    const response = {};
    const request = {};

    const payloadProduct = [{
      name: 'Example Product', quantity: 1,
    },
    { name: 'Example Product 2', quantity: 2 }
    ]

    beforeEach(() => {
      sinon.stub(ProductsService, 'getAll').returns(payloadProduct)
      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
      response.json = sinon.stub().returns(JSON.stringify(payloadProduct))
    })

    afterEach(() => {
      ProductsService.getAll.restore();
    })

    it('Retorna todos os produtos', async () => {
      const result = await ProductsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(JSON.stringify(payloadProduct));
    })
  })

  describe('Quando é pedido para deletar um produto', () => {
    describe('Quando o ID é inválido', () => {

      const response = {};
      const request = {};

      const payloadProduct = [{
        name: 'Example Product', quantity: 1, id: 1
      }
      ]

      beforeEach(() => {
        request.params = sinon.stub().returns(2);
        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();
        response.json = sinon.stub().returns(JSON.stringify(payloadProduct))
        sinon.stub(ProductsService, 'find').returns(false)
      })
      afterEach(() => {
        ProductsService.find.restore();
      })

      it('Retorna error "404" com a mensagem "Product not found"', async () => {
        const [result ]= await ProductsController.delete(request, response);
        console.log(result);
      })
    })
    describe('Quando o ID é válido', () => {
      const response = {};
      const request = {};

      const payloadProduct = [{
        name: 'Example Product', quantity: 1, id: 1
      }
      ]

      beforeEach(() => {
        request.params = sinon.stub().returns(1);
        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();
        response.json = sinon.stub().returns(JSON.stringify(payloadProduct))
        sinon.stub(ProductsService, 'find').returns(payloadProduct)
        sinon.stub(ProductsService, 'delete').returns();
      })
      afterEach(() => {
        ProductsService.find.restore();
        ProductsService.delete.restore();
      })
      it('Retorna o produto deletado', async () => {
        const result = await ProductsController.delete(request, response);
        expect(result).to.be.equals(JSON.stringify(payloadProduct));
      })
    })
  })
});
